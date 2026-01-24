import { Subject } from "@/types";

export const DEPARTMENTS = [
  "CSE",
  "EEE",
  "Civil",
  "Mechanical",
  "ECE",
  "IT",
  "Biotech",
  "AIDS",
  "Maths",
];

export const DEPARTMENT_OPTIONS = DEPARTMENTS.map((dept) => ({
  value: dept,
  label: dept,
}));

export const MOCK_SUBJECTS: Subject[] = [
  // CSE Department
  {
    id: 1,
    courseCode: "CS3001",
    name: "Data Structures",
    credits: 4,
    department: "CSE",
    description:
      "Study of fundamental data structures including arrays, linked lists, stacks, queues, trees, and graphs with implementation techniques.",
  },
  {
    id: 2,
    courseCode: "CS3002",
    name: "Design and Analysis of Algorithms",
    credits: 4,
    department: "CSE",
    description:
      "Analysis of algorithm efficiency, sorting and searching techniques, graph algorithms, dynamic programming, and complexity theory.",
  },
  {
    id: 3,
    courseCode: "CS3003",
    name: "Database Management Systems",
    credits: 3,
    department: "CSE",
    description:
      "Database design, SQL, normalization, transaction management, concurrency control, and database administration.",
  },
  {
    id: 4,
    courseCode: "CS3004",
    name: "Operating Systems",
    credits: 4,
    department: "CSE",
    description:
      "Process management, memory management, file systems, I/O systems, and synchronization in modern operating systems.",
  },
  {
    id: 5,
    courseCode: "CS3005",
    name: "Computer Networks",
    credits: 3,
    department: "CSE",
    description:
      "Network architectures, protocols, TCP/IP, routing algorithms, network security, and wireless networks.",
  },

  // EEE Department
  {
    id: 6,
    courseCode: "EE3001",
    name: "Electrical Machines I",
    credits: 4,
    department: "EEE",
    description:
      "DC machines, transformers, three-phase circuits, and their operating principles and characteristics.",
  },
  {
    id: 7,
    courseCode: "EE3002",
    name: "Power Systems",
    credits: 4,
    department: "EEE",
    description:
      "Power generation, transmission, distribution, load flow analysis, fault analysis, and stability studies.",
  },
  {
    id: 8,
    courseCode: "EE3003",
    name: "Control Systems",
    credits: 3,
    department: "EEE",
    description:
      "Analysis and design of control systems, stability analysis, frequency response, and state-space methods.",
  },
  {
    id: 9,
    courseCode: "EE3004",
    name: "Power Electronics",
    credits: 4,
    department: "EEE",
    description:
      "Power semiconductor devices, converters, inverters, choppers, and their applications in power systems.",
  },

  // Civil Department
  {
    id: 10,
    courseCode: "CE3001",
    name: "Strength of Materials",
    credits: 4,
    department: "Civil",
    description:
      "Stress, strain, bending moments, shear force, torsion, and deflection in structural members.",
  },
  {
    id: 11,
    courseCode: "CE3002",
    name: "Structural Analysis",
    credits: 4,
    department: "Civil",
    description:
      "Analysis of determinate and indeterminate structures using classical and matrix methods.",
  },
  {
    id: 12,
    courseCode: "CE3003",
    name: "Fluid Mechanics",
    credits: 3,
    department: "Civil",
    description:
      "Properties of fluids, fluid statics, fluid dynamics, flow through pipes, and hydraulic machines.",
  },
  {
    id: 13,
    courseCode: "CE3004",
    name: "Geotechnical Engineering",
    credits: 4,
    department: "Civil",
    description:
      "Soil mechanics, soil classification, compaction, shear strength, and foundation engineering principles.",
  },

  // Mechanical Department
  {
    id: 14,
    courseCode: "ME3001",
    name: "Thermodynamics",
    credits: 4,
    department: "Mechanical",
    description:
      "Laws of thermodynamics, properties of pure substances, power and refrigeration cycles, and thermodynamic relations.",
  },
  {
    id: 15,
    courseCode: "ME3002",
    name: "Fluid Mechanics and Machinery",
    credits: 4,
    department: "Mechanical",
    description:
      "Fluid properties, flow analysis, boundary layer theory, pumps, turbines, and hydraulic systems.",
  },
  {
    id: 16,
    courseCode: "ME3003",
    name: "Heat and Mass Transfer",
    credits: 3,
    department: "Mechanical",
    description:
      "Conduction, convection, radiation heat transfer, and mass transfer phenomena with applications.",
  },
  {
    id: 17,
    courseCode: "ME3004",
    name: "Manufacturing Technology",
    credits: 4,
    department: "Mechanical",
    description:
      "Metal casting, forming, joining, machining processes, metrology, and quality control in manufacturing.",
  },

  // ECE Department
  {
    id: 18,
    courseCode: "EC3001",
    name: "Electronic Circuits",
    credits: 4,
    department: "ECE",
    description:
      "Amplifiers, oscillators, feedback systems, operational amplifiers, and their applications in circuit design.",
  },
  {
    id: 19,
    courseCode: "EC3002",
    name: "Digital Signal Processing",
    credits: 4,
    department: "ECE",
    description:
      "Discrete-time signals and systems, Z-transforms, DFT, FFT, and digital filter design techniques.",
  },
  {
    id: 20,
    courseCode: "EC3003",
    name: "Communication Systems",
    credits: 3,
    department: "ECE",
    description:
      "Amplitude and frequency modulation, pulse modulation, noise analysis, and analog communication techniques.",
  },
  {
    id: 21,
    courseCode: "EC3004",
    name: "VLSI Design",
    credits: 4,
    department: "ECE",
    description:
      "CMOS logic design, semiconductor device physics, layout design, and integrated circuit fabrication.",
  },

  // IT Department
  {
    id: 22,
    courseCode: "IT3001",
    name: "Web Technologies",
    credits: 3,
    department: "IT",
    description:
      "HTML, CSS, JavaScript, server-side programming, web frameworks, and responsive web design principles.",
  },
  {
    id: 23,
    courseCode: "IT3002",
    name: "Software Engineering",
    credits: 4,
    department: "IT",
    description:
      "Software development life cycle, requirement analysis, design patterns, testing, and project management.",
  },
  {
    id: 24,
    courseCode: "IT3003",
    name: "Information Security",
    credits: 3,
    department: "IT",
    description:
      "Cryptography, network security, authentication, access control, and security protocols for information systems.",
  },
  {
    id: 25,
    courseCode: "IT3004",
    name: "Cloud Computing",
    credits: 3,
    department: "IT",
    description:
      "Cloud service models, virtualization, distributed computing, cloud platforms, and deployment strategies.",
  },

  // Biotech Department
  {
    id: 26,
    courseCode: "BT3001",
    name: "Biochemistry",
    credits: 4,
    department: "Biotech",
    description:
      "Structure and function of biomolecules, enzymology, metabolism, and molecular biology fundamentals.",
  },
  {
    id: 27,
    courseCode: "BT3002",
    name: "Genetic Engineering",
    credits: 4,
    department: "Biotech",
    description:
      "Recombinant DNA technology, gene cloning, PCR, gene expression, and applications in biotechnology.",
  },
  {
    id: 28,
    courseCode: "BT3003",
    name: "Bioprocess Engineering",
    credits: 3,
    department: "Biotech",
    description:
      "Fermentation technology, bioreactor design, downstream processing, and industrial biotechnology applications.",
  },
  {
    id: 29,
    courseCode: "BT3004",
    name: "Immunology",
    credits: 3,
    department: "Biotech",
    description:
      "Immune system components, antigen-antibody reactions, immunological techniques, and vaccine development.",
  },

  // AIDS Department
  {
    id: 30,
    courseCode: "AD3001",
    name: "Machine Learning",
    credits: 4,
    department: "AIDS",
    description:
      "Supervised and unsupervised learning, classification, regression, clustering, and neural network fundamentals.",
  },
  {
    id: 31,
    courseCode: "AD3002",
    name: "Deep Learning",
    credits: 4,
    department: "AIDS",
    description:
      "Artificial neural networks, CNN, RNN, LSTM, GANs, and applications in computer vision and NLP.",
  },
  {
    id: 32,
    courseCode: "AD3003",
    name: "Data Analytics",
    credits: 3,
    department: "AIDS",
    description:
      "Statistical analysis, data visualization, exploratory data analysis, and business intelligence techniques.",
  },
  {
    id: 33,
    courseCode: "AD3004",
    name: "Natural Language Processing",
    credits: 3,
    department: "AIDS",
    description:
      "Text processing, language models, sentiment analysis, machine translation, and chatbot development.",
  },

  // Maths Department
  {
    id: 34,
    courseCode: "MA3001",
    name: "Advanced Calculus",
    credits: 4,
    department: "Maths",
    description:
      "Multivariable calculus, vector calculus, line integrals, surface integrals, and vector field theory.",
  },
  {
    id: 35,
    courseCode: "MA3002",
    name: "Linear Algebra",
    credits: 4,
    department: "Maths",
    description:
      "Vector spaces, matrices, eigenvalues, eigenvectors, linear transformations, and applications.",
  },
  {
    id: 36,
    courseCode: "MA3003",
    name: "Differential Equations",
    credits: 3,
    department: "Maths",
    description:
      "Ordinary and partial differential equations, Laplace transforms, and applications in engineering.",
  },
  {
    id: 37,
    courseCode: "MA3004",
    name: "Probability and Statistics",
    credits: 3,
    department: "Maths",
    description:
      "Probability theory, distributions, hypothesis testing, regression analysis, and statistical inference.",
  },
];
