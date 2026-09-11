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
  summary: string
  proves: string
  tags: string[]
  outcome?: string
  emphasis: "primary" | "supporting"
}

export const proofProjects: ProofProject[] = [
  {
    title: "Home Energy Manager",
    question:
      "How can a home make its own energy use understandable enough to act on?",
    summary:
      "A personal experiment connecting solar, batteries, household energy data, automation, and AI into one system designed to help people understand what their home is doing and make better decisions about energy use.",
    proves:
      "Tristin can enter a messy real-world system, teach herself what is needed, integrate technologies, experiment, and build something useful.",
    tags: ["Systems", "AI", "Experimentation", "Sustainability"],
    emphasis: "primary",
  },
  {
    title: "Please, Health Me!?",
    question:
      "How do you make healthcare easier to understand without oversimplifying it?",
    summary:
      "A healthcare education podcast and resource platform built around real questions people have when medicine, testing, insurance, and everyday life get confusing. It combines clinical expertise with research, storytelling, digital tools, and practical resources.",
    proves:
      "Research, storytelling, technology, and experience design can make complex expertise more approachable and useful.",
    tags: ["Healthcare", "Research", "Storytelling", "Technology"],
    emphasis: "primary",
  },
  {
    title: "AI Developer Assistant",
    question: "What if the documentation isn’t actually the problem?",
    summary:
      "Thousands of engineers were losing time to setup friction and scattered knowledge. Tristin reframed the issue as knowledge access, then designed a RAG-powered assistant grounded in real support data, alongside onboarding and an AI quality framework. Developer experience scores rose from 59% to 75%, and setup time was cut in half.",
    proves:
      "Tristin can reframe the stated problem, use emerging technology appropriately, and connect research, AI, strategy, and experience design to measurable improvement.",
    tags: ["Developer experience", "AI", "Research", "Strategy"],
    outcome: "59% → 75% developer experience score",
    emphasis: "primary",
  },
  {
    title: "Carbon Aware AI Workload Manager",
    question:
      "How do you turn sustainability research into something developers can actually use?",
    summary:
      "Working with Intel Labs, Tristin translated carbon-aware computing research into a working system that helped AI developers see emissions and schedule workloads around renewable-energy availability, reducing carbon impact by as much as 60%.",
    proves:
      "She can connect research, sustainability, infrastructure, systems, design, and technology into a usable solution.",
    tags: ["Sustainability", "Research", "Infrastructure", "Design"],
    outcome: "Up to 60% less carbon impact",
    emphasis: "supporting",
  },
  {
    title: "Smart Edge Developer Experience",
    question:
      "How do you create clarity around a technology almost nobody understands yet?",
    summary:
      "As Intel’s edge platform entered a major transformation, Tristin worked across 16+ roles, developer journeys, documentation, business goals, and product strategy to understand the emerging ecosystem and create a clearer path for developers entering it.",
    proves:
      "She can enter an unfamiliar domain, synthesize a complex ecosystem, and create clarity and direction across teams.",
    tags: ["Developer experience", "Systems", "Research", "Strategy"],
    outcome: "16+ roles across the ecosystem",
    emphasis: "supporting",
  },
  {
    title: "Stat Doctors",
    question:
      "What if the real solution is to remove the system everyone assumes you need?",
    summary:
      "A virtual healthcare startup relied on a costly call center that frequently failed to connect patients and doctors. Tristin helped replace it with a custom Twilio-based paging system and redesigned the supporting physician and administrative experiences. Missed connections and disruptions dropped by 95%, while the call-center cost was eliminated.",
    proves:
      "This way of working is not new: question the assumed solution, connect technology and experience design, build a different system, and measure the result.",
    tags: ["Healthcare", "Technology", "Experience design", "Systems"],
    outcome: "95% fewer missed connections and disruptions",
    emphasis: "supporting",
  },
]
