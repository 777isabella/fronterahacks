export type ResourceCategory =
  | "literacy"
  | "ged"
  | "esl"
  | "tutoring"
  | "libraries"
  | "job_training"
  | "health"
  | "community";

export type Resource = {
  id: string;
  title: string;
  url: string;
  description: string;
  categories: ResourceCategory[];
  audience?: ("adult" | "youth" | "family" | "educator")[];
  format?: ("in_person" | "online" | "both")[];
  region?: ("cameron" | "hidalgo" | "starr" | "willacy" | "rgv")[];
};

export const RESOURCES: Resource[] = [
  {
    id: "rgv-literacy-center",
    title: "Rio Grande Valley Literacy Center",
    url: "https://www.nld.org/rio-grande-valley-literacy-center",
    description:
      "Adult literacy and education support in the Rio Grande Valley.",
    categories: ["literacy", "tutoring"],
    audience: ["adult"],
    format: ["in_person", "online"],
    region: ["rgv"],
  },
  {
    id: "rgv-vision-literacy-center-article",
    title: "RGV Vision Magazine: The RGV Literacy Center",
    url: "https://rgvisionmagazine.com/the-rgv-literacy-center/",
    description: "Overview article and context on local literacy efforts.",
    categories: ["literacy", "community"],
    audience: ["adult", "family"],
    format: ["online"],
    region: ["rgv"],
  },
  {
    id: "krgv-poverty-literacy",
    title: "KRGV: High poverty level affecting RGV literacy rates",
    url: "https://www.krgv.com/news/high-poverty-level-affecting-rgv-literacy-rates",
    description: "Local reporting on literacy challenges and contributing factors.",
    categories: ["literacy", "community"],
    audience: ["adult", "educator", "family"],
    format: ["online"],
    region: ["rgv"],
  },
  {
    id: "barbara-bush-map",
    title: "Barbara Bush Foundation Literacy Map",
    url: "https://map.barbarabush.org/overview/#literacy",
    description:
      "Interactive map and data about literacy rates across the U.S., including the RGV.",
    categories: ["literacy"],
    audience: ["adult", "educator"],
    format: ["online"],
    region: ["rgv"],
  },
  {
    id: "tx-ged",
    title: "Texas GED / High School Equivalency (HSE) Info",
    url: "https://tea.texas.gov/academics/learning-support-and-programs/adult-education-and-literacy/high-school-equivalency-program",
    description: "State guidance for GED/HSE pathways in Texas.",
    categories: ["ged"],
    audience: ["adult"],
    format: ["online"],
    region: ["rgv"],
  },
  {
    id: "utrgv-continuing-ed",
    title: "UTRGV Continuing Education",
    url: "https://www.utrgv.edu/ce/",
    description:
      "Continuing education programs and professional courses for the region.",
    categories: ["job_training", "community"],
    audience: ["adult"],
    format: ["both"],
    region: ["rgv"],
  },
  {
    id: "utrgv-library",
    title: "UTRGV University Library",
    url: "https://www.utrgv.edu/library/",
    description:
      "Library services, learning support, and research access for the RGV.",
    categories: ["libraries", "literacy"],
    audience: ["adult", "youth", "educator"],
    format: ["both"],
    region: ["rgv"],
  },
  {
    id: "imls-library-locator",
    title: "Find a Library (Library Locator)",
    url: "https://www.imls.gov/search-compare",
    description: "Find nearby public libraries and services.",
    categories: ["libraries"],
    audience: ["adult", "youth", "family"],
    format: ["online"],
    region: ["rgv"],
  },
  {
    id: "proliteracy-education-network",
    title: "ProLiteracy Education Network",
    url: "https://www.proliteracy.org/education-network/",
    description:
      "Adult education and literacy resources (toolkits, program finder, guidance).",
    categories: ["literacy", "tutoring"],
    audience: ["adult", "educator"],
    format: ["online"],
    region: ["rgv"],
  },
  {
    id: "health-literacy-cdc",
    title: "CDC: Health Literacy",
    url: "https://www.cdc.gov/healthliteracy/index.html",
    description:
      "Plain-language health info and tools for improving health literacy.",
    categories: ["health", "literacy"],
    audience: ["adult", "educator", "family"],
    format: ["online"],
    region: ["rgv"],
  },
  {
    id: "mcallen-public-library",
    title: "McAllen Public Library",
    url: "https://mcallenlibrary.net/",
    description:
      "Community library programs, events, and reading resources in McAllen.",
    categories: ["libraries", "community"],
    audience: ["adult", "youth", "family"],
    format: ["both"],
    region: ["hidalgo", "rgv"],
  },
  {
    id: "brownsville-public-library",
    title: "Brownsville Public Library",
    url: "https://www.brownsville.lib.tx.us/",
    description:
      "Library services and community programs in Brownsville.",
    categories: ["libraries", "community"],
    audience: ["adult", "youth", "family"],
    format: ["both"],
    region: ["cameron", "rgv"],
  },
];
