import { Course } from "@/types/Course";
import { faker } from '@faker-js/faker';

const generateCurriculam = (count: number) => {
  const crr: {title: string, duration: string}[] = []
  for (let index = 0; index < count; index++) {
    const res = {
      title: faker.word.words(5),
      duration: `${faker.number.int()}hrs`
    };
    crr.push(res)
  }
  return crr;
}

const courseData: Course[] = [
  {
    id: "jhbjhd",
    title: "Piping Engineering",
    image: "/assets/images/piping-design.jpg",
    shortDescription: "Master the core concepts",
    description:
      "This course provides a comprehensive introduction to piping design principles, covering pipe materials, components, codes and standards, and design calculations.",
    courseDuration: "40",
    category: ["piping"],
    difficulty: "Beginner",
    language: ["English"],
    assessment: "Snwel Academy Exam",
    certificate: true,
    lessons: 20,
    rating: 4.8,
    enrolled: 125,
    isPopular: true,
    price: 1000,
    currency: "INR",
    appearence: {
      themeColor: '#14452F',
      forgroundColor: '#fff'
    },
    masterCategory: "Short-Term Courses",
    images: {
      iconImage: '/assets/images/piping_engineering_exceltechnicalinstitute_thane.png',
      promotionalCardImage: "/assets/images/demo-course-img-02.webp"
    },
    curriculum: generateCurriculam(10)
  },
  {
    id: "iuyiwe",
    title: "Advanced Stress Analysis for Piping Systems",
    shortDescription: "In-depth analysis techniques",
    image: "/assets/images/advanced-stress-anlysis-piping-system.jpg",
    description:
      "This advanced course delves into stress analysis methods for piping systems, including finite element analysis (FEA) and fatigue analysis.",
    courseDuration: "30",
    category: ["piping"],
    difficulty: "Intermediate",
    language: ["English"],
    assessment: "Project & Case Studies",
    certificate: true,
    lessons: 15,
    rating: 4.5,
    enrolled: 72,
    isPopular: false,
    price: 1000,
    currency: "INR",
    masterCategory: "",
    appearence: {
      themeColor: '#008799',
      forgroundColor: '#fff'
    },
    images: {
      iconImage: "",
      promotionalCardImage: "/assets/images/demo-course-img-05.webp"
    },
    curriculum: generateCurriculam(5)
  },
  {
    id: "iuy",
    title: "SP3D for Piping Design and Modeling",
    shortDescription: "Industry-standard software",
    image: "/assets/images/sp3d.jpg",
    description:
      "Learn to utilize SP3D software effectively for creating piping models, generating bills of materials, and clash detection.",
    courseDuration: "45",
    category: ["piping", "software"],
    difficulty: "Intermediate",
    language: ["English"],
    assessment: "Software Proficiency Test",
    certificate: true,
    lessons: 25,
    rating: 4.7,
    enrolled: 180,
    isPopular: true,
    price: 1000,
    currency: "INR",
    masterCategory: "Shor",
    appearence: {
      themeColor: '#EB592A',
      forgroundColor: '#fff'
    },
    images: {
      promotionalCardImage: "/assets/images/demo-course-img-06.webp",

    },
    curriculum: generateCurriculam(7)
  },
  {
    id: "iu",
    title: "Building Design and Analysis with Revit BIM",
    shortDescription: "BIM for civil engineering",
    image: "/assets/images/bim.jpg",
    description:
      "This course equips you with the skills to use Revit BIM software for building design, modeling, and structural analysis.",
    courseDuration: "50",
    category: ["civil_strl", "software"],
    difficulty: "Intermediate",
    language: ["English"],
    assessment: "Project & Final Exam",
    certificate: true,
    lessons: 30,
    rating: 4.2,
    enrolled: 105,
    isPopular: false,
    masterCategory: '',
    price: 1000,
    currency: "INR",
    curriculum: generateCurriculam(11)
  },
  {
    id: "uysdfa",
    title: "SolidWorks for Mechanical Design",
    image: "/assets/images/solidworks.jpg",
    shortDescription: "3D modeling and design",
    description:
      "Master the use of SolidWorks software for creating 3D models, performing simulations, and generating manufacturing drawings.",
    courseDuration: "40",
    category: ["mechanical", "software"],
    difficulty: "Intermediate",
    language: ["English", "Hindi"],
    assessment: "Project & Software Skills Test",
    certificate: true,
    lessons: 22,
    rating: 4.9,
    enrolled: 210,
    isPopular: true,
    masterCategory: '',
    price: 1000,
    currency: "INR",
    curriculum: generateCurriculam(3)
  },
  {
    id: "uihsa",
    title: "Process Design Essentials for Chemical Engineers",
    image: "/assets/images/chemical.jpg",
    shortDescription: "Chemical plant design principles",
    description:
      "This course introduces you to the fundamental concepts of process design for chemical plants, covering equipment selection, process flowsheet development, and economic evaluation.",
    courseDuration: "35",
    category: ["chemical"],
    difficulty: "Beginner",
    language: ["English"],
    assessment: "Assignments & Final Exam",
    certificate: true,
    lessons: 18,
    rating: 4.3,
    enrolled: 98,
    isPopular: false,
    masterCategory: '',
    price: 1000,
    currency: "INR",
    curriculum: generateCurriculam(7)
  },
  {
    id: "uiicb",
    title: "Intelligent P&IDs for Process Automation",
    shortDescription: "Interactive P&ID creation",
    image: "/assets/images/p&ids.jpg",
    description:
      "Learn to create intelligent process and instrumentation diagrams (P&IDs) using specialized software for enhanced process automation.",
    courseDuration: "25",
    category: ["chemical", "software"],
    difficulty: "Intermediate",
    language: ["English"],
    assessment: "Software Proficiency Test",
    certificate: true,
    lessons: 12,
    rating: 4.6,
    enrolled: 54,
    isPopular: true,
    masterCategory: '',
    price: 1000,
    currency: "INR",
    curriculum: generateCurriculam(9)
  },
  {
    id: "moijovd",
    title: "HVAC Design and System Selection",
    image: "/assets/images/hvac.jpg",
    shortDescription: "Comfort control for buildings",
    description:
      "Gain expertise in designing and selecting HVAC systems for various building types, ensuring optimal comfort and energy efficiency.",
    courseDuration: "30",
    category: ["mechanical"],
    difficulty: "Intermediate",
    language: ["English", "Bengali"],
    assessment: "Project & Final Exam",
    certificate: true,
    lessons: 18,
    rating: 4.7,
    enrolled: 82,
    isPopular: false,
    masterCategory: '',
    price: 1000,
    currency: "INR",
    curriculum: generateCurriculam(6)
  },
  {
    id: "kjnvds",
    title: "STAAD.Pro for Structural Analysis",
    image: "/assets/images/staad.jpg",
    shortDescription: "Finite element analysis software",
    description:
      "Master the use of STAAD.Pro software for structural analysis of buildings, bridges, and other civil engineering structures.",
    courseDuration: "40",
    category: ["civil_strl", "software"],
    difficulty: "Intermediate",
    language: ["English"],
    assessment: "Project & Software Skills Test",
    certificate: true,
    lessons: 24,
    rating: 4.4,
    enrolled: 130,
    isPopular: true,
    masterCategory: '',
    price: 1000,
    currency: "INR",
    curriculum: generateCurriculam(4)
  },
  {
    id: "kjnvds",
    title: "Introduction to Instrumentation and Control",
    image: "/assets/images/process-control.jpg",
    shortDescription: "Fundamentals of process control",
    description:
      "This course provides a foundational understanding of instrumentation and control principles used in various industrial processes.",
    courseDuration: "20",
    category: ["ei"],
    difficulty: "Beginner",
    language: ["English"],
    assessment: "Assignments & Online Quiz",
    certificate: true,
    lessons: 12,
    rating: 4.1,
    enrolled: 68,
    isPopular: false,
    masterCategory: '',
    price: 1000,
    currency: "INR",
    curriculum: generateCurriculam(20)
  },
];

export default courseData;