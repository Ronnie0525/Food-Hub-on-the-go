/**
 * Consistent section heading: eyebrow label, serif title, optional subtitle.
 * `align` controls text alignment; `as` sets the heading level for correct
 * document outline / accessibility.
 */
export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  as: Heading = 'h2',
  className = '',
}) {
  const alignment =
    align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <div className={`reveal flex flex-col gap-4 ${alignment} max-w-2xl ${className}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Heading className="font-serif text-3xl leading-tight text-cream sm:text-4xl lg:text-[2.75rem]">
        {title}
      </Heading>
      {subtitle && (
        <p className="text-base leading-relaxed text-cream-muted sm:text-lg">{subtitle}</p>
      )}
    </div>
  )
}
