import { capabilities } from "@/data/home"

export default function CapabilityList() {
  return (
    <ul
      aria-label="Woven capabilities"
      className="grid border-t border-sand-200/25 sm:grid-cols-2 lg:grid-cols-3"
    >
      {capabilities.map((capability) => (
        <li
          key={capability}
          className="border-b border-sand-200/25 py-5 font-syne text-lg font-semibold text-sand-50 sm:odd:border-r lg:border-r lg:nth-[3n]:border-r-0"
        >
          {capability}
          <span className="text-terracotta-400">.</span>
        </li>
      ))}
    </ul>
  )
}
