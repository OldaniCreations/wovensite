export type Engagement = {
  name: "Explore" | "Prove" | "Transform" | "Embed"
  focus: "Clarity" | "Evidence" | "Change" | "Capability"
  situation: string
  promise: string
  couldInclude: string
  youLeaveWith: string
}

export const engagements: Engagement[] = [
  {
    name: "Explore",
    focus: "Clarity",
    situation: "What’s actually going on?",
    promise: "Find clarity and direction.",
    couldInclude:
      "interviews, observation, systems mapping, data review, or reframing.",
    youLeaveWith:
      "a clearer problem definition, shared understanding, and direction.",
  },
  {
    name: "Prove",
    focus: "Evidence",
    situation: "Will this work before we bet on it?",
    promise: "Make the next decision with evidence.",
    couldInclude:
      "prototypes, experiments, technical exploration, or testing.",
    youLeaveWith:
      "evidence for the next decision. Sometimes that decision is “don’t build it.”",
  },
  {
    name: "Transform",
    focus: "Change",
    situation: "Why isn’t this working anymore?",
    promise: "Create a better system, process, product, or tool.",
    couldInclude:
      "Research, strategy, design, technology, prototyping, or rebuilding what’s there.",
    youLeaveWith:
      "a better system, process, product, or tool—not just incremental fixes.",
  },
  {
    name: "Embed",
    focus: "Capability",
    situation: "Who can help us move this forward?",
    promise: "Add clarity, momentum, and capacity.",
    couldInclude:
      "joining the work, connecting disciplines, or making ideas tangible.",
    youLeaveWith:
      "more clarity, momentum, and making capacity inside the team.",
  },
]

export const capabilities = [
  "Research",
  "Strategy",
  "Design",
  "Technology",
  "Experimentation",
  "Storytelling",
] as const

export type ProofProject = {
  title: string
  question: string
  primaryLabel: "EXPLORE" | "PROVE" | "TRANSFORM" | "EMBED"
  workPath: string
  summary: string
  proves: string
  tags: string[]
  evidence: string
  image?: string
  imageAlt?: string
  imageFit: "cover" | "contain"
  imagePosition: string
  imageScale: number
  emphasis: "primary" | "supporting"
}

export const proofProjects: ProofProject[] = [
  {
    title: "Home Energy Manager",
    question:
      "How can a home make its own energy use understandable enough to act on?",
    primaryLabel: "EXPLORE",
    workPath: "EXPLORE → TRANSFORM",
    summary:
      "I first worked to understand how energy moved through the home, then created a new system connecting solar, batteries, household data, automation, and AI.",
    proves:
      "Tristin can enter a messy system, learn what is needed, and build something useful.",
    tags: ["Systems", "AI", "Experimentation", "Sustainability"],
    evidence:
      "A personal system connecting solar, batteries, household energy data, automation, and AI.",
    image: "/Habyn.png",
    imageAlt:
      "Habyn home energy dashboard showing solar generation, battery status, usage charts, and automation recommendations",
    imageFit: "cover",
    imagePosition: "left top",
    imageScale: 1.5,
    emphasis: "primary",
  },
  {
    title: "Please, Health Me!?",
    question:
      "How do you make healthcare easier to understand without oversimplifying it?",
    primaryLabel: "TRANSFORM",
    workPath: "TRANSFORM",
    summary:
      "I transformed complex healthcare questions into a more understandable education and resource platform built around real questions.",
    proves:
      "Research, storytelling, technology, and experience design can make complex expertise more useful.",
    tags: ["Healthcare", "Research", "Storytelling", "Technology"],
    evidence:
      "A healthcare education podcast and resource platform built around real questions.",
    image: "/pleasehealthpod.png",
    imageAlt:
      "Please, Health Me!? podcast page showing artwork, description, and recent episodes",
    imageFit: "cover",
    imagePosition: "left top",
    imageScale: 1.5,
    emphasis: "primary",
  },
  {
    title: "AI Developer Assistant",
    question: "What if the documentation isn’t actually the problem?",
    primaryLabel: "PROVE",
    workPath: "PROVE",
    summary:
      "I reframed setup friction and scattered knowledge as a knowledge-access problem, then designed a RAG-powered assistant, onboarding experience, and AI quality framework. Developer experience increased from 59% to 75%, and setup time was cut in half.",
    proves:
      "Tristin can reframe the stated problem and connect research, AI, and design to measurable improvement.",
    tags: ["Developer experience", "AI", "Research", "Strategy"],
    evidence:
      "59% → 75% developer experience score · setup time cut in half.",
    image: "/aidevassist2.png",
    imageAlt:
      "AI Assist Beta chat interface with recent conversations, quick actions, and a message input",
    imageFit: "cover",
    imagePosition: "left top",
    imageScale: 1.5,
    emphasis: "primary",
  },
  {
    title: "Carbon Aware AI Workload Manager",
    question:
      "How do you turn sustainability research into something developers can actually use?",
    primaryLabel: "EMBED",
    workPath: "EMBED",
    summary:
      "I brought carbon-aware research into a practical system developers could use to see emissions and schedule workloads around renewable-energy availability.",
    proves:
      "Tristin can translate sustainability research and infrastructure constraints into a usable tool.",
    tags: ["Sustainability", "Research", "Infrastructure", "Design"],
    evidence: "Up to 60% less carbon impact.",
    image: "/carbonaware_3.png",
    imageAlt:
      "Carbon Aware AI Scheduler dashboard showing active jobs, training progress, and carbon savings",
    imageFit: "cover",
    imagePosition: "left top",
    imageScale: 1.5,
    emphasis: "supporting",
  },
  {
    title: "Smart Edge Developer Experience",
    question:
      "How do you create clarity around a technology almost nobody understands yet?",
    primaryLabel: "EXPLORE",
    workPath: "EXPLORE · EMBED",
    summary:
      "I joined a team of engineers and PMs to make sense of an emerging ecosystem and create a clearer path forward.",
    proves:
      "Tristin can synthesize an unfamiliar ecosystem and create direction across teams.",
    tags: ["Developer experience", "Systems", "Research", "Strategy"],
    evidence: "16+ roles across the emerging ecosystem.",
    image: "/journey.webp",
    imageAlt:
      "Smart Edge developer journey map showing roles, touchpoints, and ecosystem connections",
    imageFit: "cover",
    imagePosition: "left top",
    imageScale: 1.5,
    emphasis: "supporting",
  },
  {
    title: "Stat Doctors",
    question:
      "What if the real solution is to remove the system everyone assumes you need?",
    primaryLabel: "EXPLORE",
    workPath: "EXPLORE → TRANSFORM",
    summary:
      "I questioned the assumed call-center solution, then designed a different system for connecting patients and doctors.",
    proves:
      "Tristin can question the assumed solution, rebuild the system, and measure the result.",
    tags: ["Healthcare", "Technology", "Experience design", "Systems"],
    evidence:
      "95% fewer missed connections · call-center cost eliminated.",
    image: "/stat1.png",
    imageAlt:
      "StatPage Call Patient interface showing conference call, phone, and direct call options",
    imageFit: "cover",
    imagePosition: "left top",
    imageScale: 1.5,
    emphasis: "supporting",
  },
]
