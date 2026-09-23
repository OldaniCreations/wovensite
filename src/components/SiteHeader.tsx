import Link from "next/link"

const navigation = [
  { label: "Home", href: "/#top" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/contact" },
] as const

export default function SiteHeader() {
  return (
    <header className="bg-cream">
      <div className="container flex flex-col gap-4 border-b border-olive-800/20 py-4 sm:flex-row sm:items-center sm:justify-between sm:py-5">
        <Link
          href="/"
          className="font-syne text-sm font-bold uppercase tracking-[0.16em] text-olive-800"
        >
          Woven Logic Studio
        </Link>

        <nav aria-label="Primary navigation">
          <ul className="flex items-center justify-between gap-4 font-syne text-xs font-semibold uppercase tracking-[0.1em] sm:justify-start sm:gap-6">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={
                    item.label === "Contact"
                      ? "text-olive-800 underline decoration-terracotta-400 decoration-2 underline-offset-4 hover:text-terracotta-600"
                      : "text-[var(--ink-soft)] hover:text-terracotta-600"
                  }
                >
                  {item.label}
                  {item.label === "Contact" ? (
                    <span aria-hidden="true"> →</span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
