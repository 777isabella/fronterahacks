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
  // {
  //   id: "rgv-literacy-center",
  //   title: "Rio Grande Valley Literacy Center",
  //   url: "https://www.nld.org/rio-grande-valley-literacy-center",
  //   description:
  //     "Adult literacy and education support in the Rio Grande Valley.",
  //   categories: ["literacy", "tutoring"],
  //   audience: ["adult"],
  //   format: ["in_person", "online"],
  //   region: ["rgv"],
  // },
  {
    id: "events-calendar",
    title: "RGV Calendar of Events",
    url: "https://myrgv.com/calendar-of-events/?utm_source=copilot.com",
    description: "Events here in the RGV can be seen on this calendar.",
    categories: ["community"],
    audience: ["adult", "youth", "family"],
    format: ["both"],
    region: ["rgv"]
  },
 {
    id: "events-stx",
    title: "South Texas Calendar of Events",
    url: "https://www.steprgv.org/events?utm_source=copilot.com",
    description: "A calendar of events in South Texas provided by the South Texas Equality Project.",
    categories: ["community"],
    audience: ["adult", "youth", "family"],
    format: ["both"],
    region: ["rgv"]
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
      id: "health-literacy",
    title: "Bridging the Gap of Healthcare Inequities in the Rio Grande Valley",
    url: "https://www.cms.gov/files/document/bridging-gap-healthcare-inequities-rio-grande-valley-healthcare-systems-integrated-health-equity.pdf",
    description:
      "Bringing awareness to healthcare inequities and detailing DHR's plan to increase healthcare equity in the RGV.",
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
  {
    id: "explore-mcallen-events",
    title: "Explore McAllen: Events",
    url: "https://www.exploremcallen.com/events/",
    description: "Local events calendar for McAllen and surrounding RGV communities.",
    categories: ["community"],
    audience: ["adult", "youth", "family"],
    format: ["in_person"],
    region: ["hidalgo", "rgv"],
  },
  {
    id: "stayinmcallen-utrgv-sports-events",
    title: "Stay in McAllen: UTRGV Sports Events",
    url: "https://stayinmcallen.com/utrgv-sports-events/",
    description: "UTRGV sports schedules and events to attend in the RGV.",
    categories: ["community"],
    audience: ["adult", "youth", "family"],
    format: ["in_person"],
    region: ["hidalgo", "rgv"],
  },
  {
    id: "bgc-mcallen",
    title: "Boys & Girls Clubs of McAllen",
    url: "https://www.bgcmcallen.net/s/",
    description: "After-school programs, mentorship, and youth activities in McAllen.",
    categories: ["community", "literacy"],
    audience: ["youth", "family"],
    format: ["in_person"],
    region: ["hidalgo", "rgv"],
  },
  {
    id: "visit-btx-happening",
    title: "Visit Brownsville: Happening in BTX",
    url: "https://visitbtx.com/happeninginbtx/",
    description: "Events and activities in Brownsville (BTX) and nearby areas.",
    categories: ["community"],
    audience: ["adult", "youth", "family"],
    format: ["in_person"],
    region: ["cameron", "rgv"],
  },
  {
    id: "harlingen-field-events",
    title: "Harlingen Field: Events",
    url: "https://www.boxofficeticketsales.com/venues/harlingen-field",
    description: "Tickets and event listings for Harlingen Field.",
    categories: ["community"],
    audience: ["adult", "youth", "family"],
    format: ["in_person"],
    region: ["cameron", "rgv"],
  },
  {
    id: "visit-harlingen-events",
    title: "Visit Harlingen: Events",
    url: "https://visitharlingentexas.com/events/",
    description: "Local events calendar for Harlingen and the mid-Valley area.",
    categories: ["community"],
    audience: ["adult", "youth", "family"],
    format: ["in_person"],
    region: ["cameron", "rgv"],
  },
];
