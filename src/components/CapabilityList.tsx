import { capabilities } from "@/data/home"

export default function CapabilityList() {
  return (
    <ul
      aria-label="Woven capabilities"
      className="flex flex-wrap gap-x-4 gap-y-2 border-t border-sand-200/25 pt-6 font-syne text-sm font-semibold text-sand-50 sm:gap-x-5 sm:pt-8 sm:text-base lg:gap-x-7 lg:text-lg"
    >
      {capabilities.map((capability) => (
        <li key={capability}>
          {capability}<span className="text-terracotta-400">.</span>
        </li>
      ))}
    </ul>
  )
}
