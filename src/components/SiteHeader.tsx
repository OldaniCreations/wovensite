const navigation = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
] as const

export default function SiteHeader() {
  return (
    <header className="bg-cream">
      <div className="container flex items-center justify-between border-b border-olive-800/20 py-5">
        <a
          href="#top"
          className="font-syne text-sm font-bold uppercase tracking-[0.16em] text-olive-800"
        >
          Woven Logic Studio
        </a>

        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-5 font-syne text-xs font-semibold uppercase tracking-[0.12em] sm:gap-7">
            {navigation.map((item) => (
              <li key={item.href} className="hidden sm:block">
                <a
                  href={item.href}
                  className="text-[var(--ink-soft)] hover:text-terracotta-600"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="text-olive-800 underline decoration-terracotta-400 decoration-2 underline-offset-4 hover:text-terracotta-600"
              >
                Contact <span aria-hidden="true">→</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
