import type { Metadata } from "next"

import SiteFooter from "@/components/SiteFooter"
import SiteHeader from "@/components/SiteHeader"

const CONTACT_EMAIL = "contact@wovenlogic.studio"
const LINKEDIN_URL = "https://www.linkedin.com/in/tristinoldani"
const CALENDLY_URL = "https://calendly.com/tristinoldani/30min"

const actions = [
  {
    label: "Tell me what you’re trying to solve",
    description: "Send me an email with a little context.",
    href: `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      "A problem I’m trying to solve",
    )}`,
    external: false,
  },
  {
    label: "Book a 30-minute chat",
    description: "Choose a time that works for you.",
    href: CALENDLY_URL,
    external: true,
  },
  {
    label: "Connect on LinkedIn",
    description: "Connect and keep in touch.",
    href: LINKEDIN_URL,
    external: true,
  },
] as const

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Tristin Oldani at Woven Logic Studio about a complex problem, workflow, or emerging technology.",
}

export default function ContactPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <SiteHeader />

      <main id="main-content" tabIndex={-1}>
        <section
          id="top"
          aria-labelledby="contact-page-heading"
          className="bg-cream"
        >
          <div className="container py-14 sm:py-16 md:py-24">
            <div className="mx-auto max-w-4xl">
              <div className="text-center">
                <p className="tag mb-5">Contact Woven</p>
                <h1
                  id="contact-page-heading"
                  className="text-[clamp(3rem,7vw,5.5rem)] leading-[0.96] tracking-[-0.05em] text-ink"
                >
                  Let’s talk.
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--ink-soft)] sm:text-xl">
                  Choose whichever way of getting in touch works best for you.
                </p>
              </div>

              <nav
                aria-label="Contact options"
                className="mt-10 overflow-hidden rounded-3xl border border-olive-800/15 bg-sand-50 shadow-[0_18px_50px_rgba(53,56,36,0.09)] sm:mt-12"
              >
                <ul>
                  {actions.map((action, index) => (
                    <li
                      key={action.label}
                      className={
                        index === 0
                          ? undefined
                          : "border-t border-olive-800/15"
                      }
                    >
                      <a
                        href={action.href}
                        target={action.external ? "_blank" : undefined}
                        rel={action.external ? "noreferrer" : undefined}
                        className="group grid min-h-28 grid-cols-[minmax(0,1fr)_auto] items-center gap-5 px-5 py-6 hover:bg-sand-100/70 sm:min-h-32 sm:px-8"
                      >
                        <span>
                          <span className="block font-syne text-xl font-bold leading-tight tracking-[-0.02em] text-olive-800 sm:text-2xl">
                            {action.label}
                          </span>
                          <span className="mt-2 block text-sm leading-relaxed text-[var(--ink-soft)] sm:text-base">
                            {action.description}
                          </span>
                        </span>
                        <span
                          aria-hidden="true"
                          className="flex h-11 w-11 items-center justify-center rounded-full bg-terracotta-600 font-syne text-xl text-sand-50 transition-all group-hover:translate-x-1 group-hover:bg-olive-800"
                        >
                          {action.external ? "↗" : "→"}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <p className="mt-6 text-center text-sm text-[var(--ink-soft)]">
                Email usually works best if you have context to share.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
