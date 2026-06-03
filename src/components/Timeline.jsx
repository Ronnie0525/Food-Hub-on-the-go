/**
 * Vertical career timeline with a gold rail and dot markers. Each entry shows
 * role, company, period and (optionally) location. The current role is highlighted.
 */
export default function Timeline({ items }) {
  return (
    <ol className="relative border-l border-surface-border pl-8 sm:pl-10">
      {items.map((item, i) => (
        <li key={`${item.company}-${i}`} className="reveal relative pb-9 last:pb-0">
          {/* Marker */}
          <span
            className={[
              'absolute -left-[41px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 sm:-left-[49px]',
              item.current
                ? 'border-gold-400 bg-gold-500'
                : 'border-surface-border bg-coal',
            ].join(' ')}
            aria-hidden="true"
          >
            {item.current && (
              <span className="absolute inline-flex h-4 w-4 animate-ping rounded-full bg-gold-500/50" />
            )}
          </span>

          <div className="flex flex-col gap-1">
            <span
              className={[
                'text-[11px] font-medium uppercase tracking-wide2',
                item.current ? 'text-gold-300' : 'text-cream-dim',
              ].join(' ')}
            >
              {item.period}
              {item.current && (
                <span className="ml-2 rounded-full bg-gold-500/15 px-2 py-0.5 text-[10px] text-gold-200">
                  Current
                </span>
              )}
            </span>

            <h3 className="font-serif text-lg leading-snug text-cream">{item.role}</h3>

            <p className="text-sm text-cream-soft">
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline text-gold-200 transition-colors hover:text-gold-100"
                >
                  {item.company}
                </a>
              ) : (
                item.company
              )}
              {item.location && (
                <span className="text-cream-muted"> · {item.location}</span>
              )}
            </p>
          </div>
        </li>
      ))}
    </ol>
  )
}
