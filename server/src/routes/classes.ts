import express from "express";
import { eq, ilike, or, and, desc, sql, getTableColumns } from "drizzle-orm";
import { classes, departments, subjects, user } from "../db/schema/index.js";
import { db } from "../db/index.js";

const router = express.Router();

// get all classes with optional search, subject, teacher filtering and pagination
router.get("/", async (req, res) => {
  try {
    const { search, subject, teacher, page = 1, limit = 10 } = req.query;

    const currentPage = Math.max(1, parseInt(String(page), 10) || 1);
    const limitPerPage = Math.min(
      Math.max(1, parseInt(String(limit), 10) || 10),
      100,
    );

    const offset = (currentPage - 1) * limitPerPage;

    const filterConditions = [];

    // search by class name or invite code
    if (search) {
      filterConditions.push(
        or(
          ilike(classes.name, `%${search}%`),
          ilike(classes.inviteCode, `%${search}%`),
        ),
      );
    }

    // filter by subject name
    if (subject) {
      const subjectPattern = `%${String(subject).replace(/[%_]/g, "\\$&")}%`;
      filterConditions.push(ilike(subjects.name, subjectPattern));
    }

    // filter by teacher name
    if (teacher) {
      const teacherPattern = `%${String(teacher).replace(/[%_]/g, "\\$&")}%`;
      filterConditions.push(ilike(user.name, teacherPattern));
    }

    // combine all filter conditions
    const whereClause =
      filterConditions.length > 0 ? and(...filterConditions) : undefined;

    const countResult = await db
      .select({ count: sql<number>`count(*)` })
      .from(classes)
      .innerJoin(subjects, eq(classes.subjectId, subjects.id))
      .innerJoin(user, eq(classes.teacherId, user.id))
      .where(whereClause);

    const totalCount = countResult[0]?.count ?? 0;

    const classList = await db
      .select({
        ...getTableColumns(classes),
        subject: { ...getTableColumns(subjects) },
        teacher: { ...getTableColumns(user) },
      })
      .from(classes)
      .innerJoin(subjects, eq(classes.subjectId, subjects.id))
      .innerJoin(user, eq(classes.teacherId, user.id))
      .where(whereClause)
      .orderBy(desc(classes.createdAt))
      .limit(limitPerPage)
      .offset(offset);

    res.status(200).json({
      data: classList,
      pagination: {
        page: currentPage,
        limit: limitPerPage,
        total: totalCount,
        totalPages: Math.ceil(totalCount / limitPerPage),
      },
    });
  } catch (error) {
    console.error("Error fetching classes:", error);
    res.status(500).json({ error: "Failed to fetch classes" });
  }
});

// get class details with teacher, subject and department info
router.get("/:id", async (req, res) => {
  const classId = Number(req.params.id);
  if (!Number.isFinite(classId))
    return res.status(400).json({ error: "No Class found." });

  const [classDetails] = await db
    .select({
      ...getTableColumns(classes),
      subject: { ...getTableColumns(subjects) },
      department: { ...getTableColumns(departments) },
      teacher: { ...getTableColumns(user) },
    })
    .from(classes)
    .leftJoin(subjects, eq(classes.subjectId, subjects.id))
    .leftJoin(user, eq(classes.teacherId, user.id))
    .leftJoin(departments, eq(subjects.departmentId, departments.id))
    .where(eq(classes.id, classId));

  if (!classDetails) return res.status(404).json({ error: "No Class found." });

  res.status(200).json({ data: classDetails });
});

router.post("/", async (req, res) => {
  try {
    const [createdClass] = await db
      .insert(classes)
      .values({
        ...req.body,
        inviteCode: Math.random().toString(36).substring(2, 9),
        schedules: [],
      })
      .returning({ id: classes.id });

    if (!createdClass) throw Error("Failed to create class");

    res.status(201).json({ data: createdClass });
  } catch (error) {
    console.error("POST /classes error:", error);
    res.status(500).json({ error: "Failed to create class" });
  }
});

export default router;
