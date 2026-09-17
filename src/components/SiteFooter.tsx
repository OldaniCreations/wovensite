const CONTACT_EMAIL = "contact@wovenlogic.studio"

const footerLinks = [
  { label: "Home", href: "#top" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const

export default function SiteFooter() {
  return (
    <footer className="bg-ink text-sand-100">
      <div className="container py-10 md:py-12">
        <div className="grid gap-10 border-b border-sand-200/20 pb-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
          <div>
            <a
              href="#top"
              className="font-syne text-sm font-bold uppercase tracking-[0.16em] text-sand-50 hover:text-terracotta-400"
            >
              Woven Logic Studio
            </a>
            <p className="mt-4 max-w-md leading-relaxed text-sand-200">
              An independent problem-solving practice for things that don’t
              have obvious answers.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-4 font-syne text-sm font-semibold sm:flex sm:flex-wrap">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sand-100 hover:text-terracotta-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-4 pt-7 text-sm text-sand-200 sm:flex-row sm:items-center sm:justify-between">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="w-fit underline decoration-terracotta-400 decoration-2 underline-offset-4 hover:text-sand-50"
          >
            {CONTACT_EMAIL}
          </a>
          <p>© {new Date().getFullYear()} Woven Logic Studio</p>
        </div>
      </div>
    </footer>
  )
}
