export default function Hero() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-3xl">
        <p style={{ fontFamily: 'var(--font-syne)' }} className="text-sm font-medium text-teal-700 uppercase tracking-widest mb-4">
          Welcome
        </p>
        <h1 style={{ fontFamily: 'var(--font-syne)' }} className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Design that handles complexity.
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
          I build products for high-stakes environments—where design must earn its place through evidence, rigor, and clear thinking about tradeoffs.
        </p>
      </div>
    </section>
  )
}
