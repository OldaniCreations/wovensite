import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

const CONTACT_EMAIL = "contact@wovenlogic.studio"
const LINKEDIN_URL = "https://www.linkedin.com/in/tristinoldani"
const CALENDLY_URL = "https://calendly.com/tristinoldani/30min"

// Replace this with the podcast site URL when it is available.
const PODCAST_URL = "/#work"

const actions = [
  {
    label: "Email me",
    href: `mailto:${CONTACT_EMAIL}`,
    external: false,
  },
  {
    label: "Connect on LinkedIn",
    href: LINKEDIN_URL,
    external: true,
  },
  {
    label: "Book a 30-minute chat",
    href: CALENDLY_URL,
    external: true,
  },
  {
    label: "Visit Woven Logic Studio",
    href: "/",
    external: false,
  },
  {
    label: "Listen to Please, Health Me!?",
    href: PODCAST_URL,
    external: false,
  },
] as const

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Connect with Tristin Oldani, founder of Woven Logic Studio.",
}

export default function ConnectPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <main
        id="main-content"
        tabIndex={-1}
        className="flex min-h-dvh items-center px-4 py-6 sm:px-8 sm:py-10"
      >
        <article className="mx-auto w-full max-w-2xl overflow-hidden rounded-[1.75rem] border border-olive-800/15 bg-sand-50/80 shadow-[0_24px_70px_rgba(53,56,36,0.12)] backdrop-blur-sm sm:rounded-[2.25rem]">
          <div className="h-2 bg-terracotta-600" aria-hidden="true" />

          <div className="px-6 pb-7 pt-7 sm:px-10 sm:pb-9 sm:pt-9 md:px-12">
            <Link
              href="/"
              aria-label="Woven Logic Studio home"
              className="inline-flex items-center gap-3 text-olive-800 hover:text-terracotta-600"
            >
              <Image
                src="/woven-logic-tree.svg"
                alt=""
                width={40}
                height={38}
                priority
                className="h-10 w-auto"
              />
              <span className="font-syne text-xs font-bold uppercase tracking-[0.16em] sm:text-sm">
                Woven Logic Studio
              </span>
            </Link>

            <div className="mt-8 border-t border-olive-800/20 pt-7 sm:mt-9 sm:pt-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
                <div className="relative aspect-square w-[5.75rem] shrink-0 overflow-hidden rounded-2xl border border-olive-800/15 bg-sand-100/60 shadow-[0_10px_32px_rgba(53,56,36,0.12)] sm:w-[6.5rem] sm:rounded-[1.35rem]">
                  <Image
                    src="/poolBG.jpg"
                    alt="Tristin Oldani"
                    fill
                    className="object-cover object-[center_20%]"
                    sizes="104px"
                    priority
                  />
                </div>
                <div className="min-w-0">
                  <h1 className="font-syne text-[clamp(2rem,7vw,3.25rem)] font-bold leading-[1.12] tracking-[-0.03em] text-ink">
                    Tristin Oldani
                  </h1>
                  <p className="mt-3 text-lg leading-snug text-[var(--ink-soft)] sm:text-xl">
                    Solving complex problems creatively.
                  </p>
                  <p className="tag mt-4">Let’s connect</p>
                </div>
              </div>

              <div className="mt-6 space-y-4 leading-relaxed sm:mt-7">
                <p className="text-lg text-ink sm:text-xl">
                  I’m Tristin, founder of Woven Logic Studio. I help teams make
                  complex systems, workflows, and emerging technology easier to
                  understand, design, and use.
                </p>
                <p className="text-sm text-[var(--ink-soft)] sm:text-base">
                  Woven brings together research, design, technology, systems,
                  experimentation, and storytelling to turn what works into
                  something useful.
                </p>
              </div>
            </div>

            <nav aria-label="Ways to connect" className="mt-8 sm:mt-9">
              <ul className="grid gap-3">
                {actions.map((action, index) => (
                  <li key={action.label}>
                    <a
                      href={action.href}
                      target={action.external ? "_blank" : undefined}
                      rel={action.external ? "noreferrer" : undefined}
                      className={
                        index === 0
                          ? "group flex min-h-14 w-full items-center justify-between gap-4 rounded-2xl bg-olive-800 px-5 py-3.5 font-syne font-semibold text-sand-50 hover:bg-terracotta-600"
                          : "group flex min-h-14 w-full items-center justify-between gap-4 rounded-2xl border border-olive-800/25 bg-transparent px-5 py-3.5 font-syne font-semibold text-olive-800 hover:border-terracotta-600 hover:bg-terracotta-600 hover:text-sand-50"
                      }
                    >
                      <span>{action.label}</span>
                      <span
                        aria-hidden="true"
                        className="shrink-0 transition-transform group-hover:translate-x-1"
                      >
                        {action.external ? "↗" : "→"}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <footer className="border-t border-olive-800/15 px-6 py-5 text-center sm:px-10">
            <Link
              href="/"
              className="font-syne text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink-soft)] hover:text-terracotta-600"
            >
              wovenlogic.studio
            </Link>
          </footer>
        </article>
      </main>
    </>
  )
}
