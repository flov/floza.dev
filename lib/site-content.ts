export const profile = {
  name: "Florian Vallen",
  roles: "Software Engineer · Web Developer · React Native",
  location: "Leipzig, Germany",
  email: "florian.vallen@gmail.com",
  tagline: "Talk is cheap. Show me the code.",
  taglineAttribution: "Linus Torvalds",
  bio: "I build web and mobile products end to end, from Next.js and Rails systems to React Native apps used in the field. Recent work includes a festival app for thousands of attendees, GDPR and DSA work at New Work, and two community products I founded and still maintain.",
  cvHref: "/Florian_Vallen_CV.pdf",
  image: "/profile.jpg",
};

export const links = [
  { label: "GitHub", href: "https://github.com/flov" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/florianv" },
  {
    label: "Stack Overflow",
    href: "https://stackoverflow.com/users/611175/flov",
  },
  { label: "Email", href: "mailto:florian.vallen@gmail.com" },
] as const;

export const skillGroups = [
  {
    label: "Languages",
    items: ["TypeScript", "Ruby", "Python", "Node.js"],
  },
  {
    label: "Product",
    items: [
      "React Native",
      "Next.js",
      "Rails",
      "React",
      "TanStack Query",
      "Tailwind",
      "Playwright",
    ],
  },
  {
    label: "Data & platforms",
    items: ["Postgres", "MongoDB", "SQL", "Docker", "Kubernetes", "AWS", "Fly"],
  },
] as const;

export const experience = [
  {
    role: "Freelancer",
    company: "Phoenix Fire Convention",
    location: "Leipzig",
    period: "March 2026 – June 2026",
    bullets: [
      "Built an iOS and Android app in React Native for Europe’s largest fire juggling convention.",
      "Served live PostgreSQL data through a Python and FastAPI backend, with push notifications and gamified workshop discovery.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "New Work SE",
    location: "Hamburg, Germany",
    period: "January 2023 – March 2026",
    bullets: [
      "Shipped Next.js and TypeScript features and maintained Ruby on Rails admin apps.",
      "Implemented GDPR and DSA requirements, and CI/CD on GitHub Actions for Docker, Kubernetes, and AWS ECR.",
    ],
  },
  {
    role: "Founder & Product Owner",
    company: "Hitchlog, Paradise Circus",
    location: "Remote",
    period: "2013 – present",
    bullets: [
      "Founded Hitchlog, an open-source social network for hitchhikers, first in Rails and later with React.",
      "Started Paradise Circus, a cross-platform app and web hub for a circus arts community in Pai, Thailand.",
    ],
  },
  {
    role: "Next.js Frontend Development",
    company: "HelloBetter",
    location: "Berlin, Germany",
    period: "October 2019 – November 2022",
    bullets: [
      "Built three separate Next.js apps in TypeScript, connected to backend microservices.",
    ],
  },
  {
    role: "Ruby Software Developer, Freelancer",
    company: "Devolute, Finiata, Red Bull",
    location: "Berlin, Germany",
    period: "September 2017 – July 2019",
    bullets: [
      "Developed and tested Rails services, including a credit-card API integration.",
      "Improved performance of a Rails API that backed a React app.",
    ],
  },
  {
    role: "Ruby Software Developer, Freelancer",
    company: "AskCharlie",
    location: "Berlin, Germany",
    period: "November 2015 – August 2017",
    bullets: [
      "Built a Rails REST API for an Angular client and applied a mobile-friendly redesign.",
    ],
  },
] as const;

export const projects = [
  {
    title: "Phoenix Fire Convention",
    subtitle: "Convention iphone and android app for circus artists",
    period: "March 2026 – ongoing",
    href: "https://phoenix-convention.com/",
    hrefLabel: "Phoenix Fire Convention",
    image: "/projects/phoenix-fire-convention/mockup-fan.png",
    imageAlt:
      "Phoenix Fire Convention app on iPhone: map, profile, timetable, and event screens in a fan layout",
    bullets: [
      "This app is special to my heart and I'm very proud of this accomplishment.",
      "It served over a thousand convention attendees and it improved the experience before and during the event substantially.",
      "By leveraging push notifications and gamifications, we created a user experience that was engaging, helpful and fun to use.",
      "Push notifications could be used by the organizers to send important general information or to communicate with single users.",
      "The API was served by a Python and FastAPI backend and the app was built in React Native.",
    ],
    repos: [
      {
        label: "iPhone App",
        href: "https://apps.apple.com/de/app/phoenix-fire-convention/id6760896561",
      },
      {
        label: "Android App",
        href: "https://www.linkedin.com/safety/go/?url=https%3A%2F%2Flnkd.in%2FdGsKySem&urlhash=Jtgh&mt=SdKSrpbtjNuM9P7mSHPlfGpTfMN_OjIwsId4BhdarbTr6IL1ijAN7aME2uPgZL482k-OH0zyF0KjK-kbiH8JQhRGfC18yIv2hRzqIkjxWmW2nnGjEq7rncLqURk5ffNZBQDnxUUSNY7Rc4t1L2p4gLL81henDbxcr5zLG-Ob5v69fdoCbW7yRWPgBxQdP0w1&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3BCoXY7eEtRVanDG9234N8ig%3D%3D",
      },
    ],
  },
  {
    title: "Paradise Circus",
    subtitle: "Community platform for circus artists",
    period: "December 2025 – March 2026",
    href: "https://paradise-circus.app",
    hrefLabel: "paradise-circus.app",
    bullets: [
      "Cross-platform iOS and Android app plus a web platform for a circus arts community in Pai, Thailand.",
      "Live workshop timetable, artist profiles, weekly show schedules, and push notifications.",
    ],
    repos: [
      {
        label: "Next.js Source",
        href: "https://github.com/flov/paradise-circus-workshops",
      },
    ],
  },
  {
    title: "Hitchlog",
    subtitle: "Social network for hitchhikers",
    period: "2014 – present",
    href: "https://hitchlog.com",
    hrefLabel: "hitchlog.com",
    bullets: [
      "Open-source Rails and React project where people share and explore hitchhiking trips.",
      "Started after years of hitchhiking, as a place to keep the stories from the road.",
    ],
    repos: [
      { label: "Ruby on Rails API", href: "https://github.com/flov/hitchlog-api" },
      { label: "Next.js", href: "https://github.com/flov/hitchlog-nextjs" },
    ],
  },
] as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;
