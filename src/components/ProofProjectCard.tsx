import { useRef } from "react"
import Image from "next/image"

import type { ProofProject } from "@/data/home"

type ProofProjectCardProps = ProofProject & {
  index: number
  isExpanded: boolean
  onToggle: () => void
}

export default function ProofProjectCard({
  title,
  question,
  primaryLabel,
  workPath,
  summary,
  proves,
  tags,
  evidence,
  image,
  imageAlt,
  imageFit,
  imagePosition,
  imageScale,
  index,
  isExpanded,
  onToggle,
}: ProofProjectCardProps) {
  const detailsId = `proof-project-details-${index}`
  const imageDialogTitleId = `proof-project-image-title-${index}`
  const imageDialogRef = useRef<HTMLDialogElement>(null)

  return (
    <article className="flex flex-col self-start border border-olive-800/20 bg-sand-50 p-6 sm:p-7">
      <p className="font-syne text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-terracotta-600">
        {primaryLabel}
      </p>
      <p className="mt-2 font-syne text-xs font-semibold uppercase tracking-[0.16em] text-olive-700 lg:min-h-[2lh]">
        {title}
      </p>

      <h3
        className="mt-5 font-lora text-2xl font-semibold leading-snug text-balance text-ink lg:min-h-[6lh] xl:min-h-[4lh] 2xl:min-h-[3lh]"
      >
        {question}
      </h3>

      {image ? (
        <>
          <button
            type="button"
            aria-label={`View larger image for ${title}`}
            onClick={() => imageDialogRef.current?.showModal()}
            className="relative mt-6 block aspect-[16/10] w-full cursor-zoom-in overflow-hidden border border-olive-800/15 bg-sand-100/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta-600"
          >
            <Image
              src={image}
              alt={imageAlt ?? ""}
              fill
              className={
                imageFit === "cover"
                  ? "object-cover"
                  : "object-contain p-2 sm:p-3"
              }
              style={{
                objectPosition: imagePosition,
                transform: `scale(${imageScale})`,
                transformOrigin: "left top",
              }}
              sizes="(min-width: 1024px) 33vw, 100vw"
            />
          </button>

          <dialog
            ref={imageDialogRef}
            aria-labelledby={imageDialogTitleId}
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                imageDialogRef.current?.close()
              }
            }}
            className="m-auto max-h-none max-w-none overflow-visible bg-transparent p-0 backdrop:bg-ink/85 backdrop:backdrop-blur-sm"
          >
            <div className="relative grid h-[min(94dvh,52rem)] w-[min(94vw,90rem)] grid-rows-[minmax(0,0.58fr)_minmax(0,1.42fr)] overflow-hidden bg-sand-50 shadow-2xl md:grid-cols-[minmax(20rem,0.8fr)_minmax(0,1.7fr)] md:grid-rows-1">
              <div className="overflow-hidden p-4 pr-14 sm:p-6 sm:pr-16 md:p-8">
                <p className="font-syne text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-terracotta-600">
                  {primaryLabel}
                </p>
                <p className="mt-1.5 font-syne text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-olive-700 sm:text-xs">
                  {title}
                </p>
                <h2
                  id={imageDialogTitleId}
                  className="mt-3 font-lora text-lg font-semibold leading-snug text-balance text-ink sm:mt-4 sm:text-xl md:text-2xl"
                >
                  {question}
                </h2>
                <p className="mt-3 border-l-2 border-terracotta-500 pl-3 font-syne text-[0.68rem] font-semibold leading-relaxed text-olive-800 sm:mt-4 sm:text-xs md:text-sm">
                  {evidence}
                </p>

                <div className="mt-4 border-t border-olive-800/20 pt-3 sm:mt-5 sm:pt-4">
                  <p className="font-syne text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-olive-700 sm:text-[0.65rem]">
                    {workPath}
                  </p>
                  <p className="mt-2 text-xs leading-[1.45] text-[var(--ink-soft)] md:text-sm">
                    {summary}
                  </p>

                  <p className="mb-1 mt-3 font-syne text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-terracotta-600 sm:mt-4 sm:text-[0.65rem]">
                    What this proves
                  </p>
                  <p className="text-xs leading-[1.45] text-ink md:text-sm">
                    {proves}
                  </p>

                  <ul
                    aria-label={`${title} capabilities in expanded view`}
                    className="mt-3 flex flex-wrap gap-1.5 sm:mt-4"
                  >
                    {tags.slice(0, 4).map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-olive-800/20 px-2 py-0.5 font-syne text-[0.52rem] font-semibold uppercase tracking-[0.08em] text-olive-700 sm:px-2.5 sm:text-[0.58rem]"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="relative order-first min-h-0 bg-sand-100 md:order-none">
                <Image
                  src={image}
                  alt={imageAlt ?? ""}
                  fill
                  className="object-contain p-3 sm:p-5"
                  sizes="(min-width: 768px) 65vw, 94vw"
                />
              </div>

              <button
                type="button"
                aria-label="Close expanded image"
                onClick={() => imageDialogRef.current?.close()}
                className="absolute right-3 top-3 z-10 grid size-10 place-items-center rounded-full border border-olive-800/20 bg-sand-50/95 font-syne text-xl leading-none text-ink shadow-md transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta-600"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
          </dialog>
        </>
      ) : null}

      <p className="mt-5 border-l-2 border-terracotta-500 pl-4 font-syne text-sm font-semibold leading-relaxed text-olive-800 lg:min-h-[5lh] xl:min-h-[4lh]">
        {evidence}
      </p>

      <div
        id={detailsId}
        hidden={!isExpanded}
        className="lg:min-h-[36rem] xl:min-h-[29rem] 2xl:min-h-[25rem]"
      >
        <div className="mt-6 border-t border-olive-800/20 pt-6">
          <p className="font-syne text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-olive-700">
            {workPath}
          </p>
          <p className="mt-4 leading-relaxed text-[var(--ink-soft)]">
            {summary}
          </p>

          <div className="mt-5">
            <p className="mb-2 font-syne text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-terracotta-600">
              What this proves
            </p>
            <p className="leading-relaxed text-ink">{proves}</p>
          </div>

          <ul
            aria-label={`${title} capabilities`}
            className="mt-5 flex flex-wrap gap-2"
          >
            {tags.slice(0, 4).map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-olive-800/20 px-3 py-1 font-syne text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-olive-700"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-auto pt-6">
        <button
          type="button"
          aria-expanded={isExpanded}
          aria-controls={detailsId}
          onClick={onToggle}
          className="flex w-full items-center justify-between border-t border-olive-800/20 pt-4 text-left font-syne text-xs font-semibold uppercase tracking-[0.14em] text-olive-700 hover:text-terracotta-700"
        >
          <span className="font-syne">
            {isExpanded ? "View less" : "View more"}
          </span>
          <span aria-hidden="true" className="font-syne text-lg leading-none">
            {isExpanded ? "−" : "+"}
          </span>
        </button>
      </div>
    </article>
  )
}
