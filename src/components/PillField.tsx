import type { FormEvent, ReactNode } from 'react'

// Outlined input with a dark pill label sitting on its top border (Give and Contact forms).

export const fieldIcons = {
  user: (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
      <circle cx="5" cy="3.2" r="1.9" stroke="currentColor" strokeWidth="0.8" />
      <path d="M1.5 9c.4-1.9 1.8-2.9 3.5-2.9S8.1 7.1 8.5 9" stroke="currentColor" strokeWidth="0.8" />
    </svg>
  ),
  mail: (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
      <circle cx="5" cy="5" r="3.8" stroke="currentColor" strokeWidth="0.8" />
      <path d="M3.2 4.3h3.6M3.2 5.7h2.4" stroke="currentColor" strokeWidth="0.8" />
    </svg>
  ),
  phone: (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
      <path
        d="M2.2 1.3l1.3 1.9-.8.9c.6 1.3 1.6 2.3 2.9 2.9l.9-.8 1.9 1.3-.7 1.2C4.5 8.4 1.6 5.5 1 2l1.2-.7z"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinejoin="round"
      />
    </svg>
  ),
  wallet: (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
      <rect x="1.3" y="2.3" width="7.4" height="6" rx="1" stroke="currentColor" strokeWidth="0.8" />
      <path d="M1.3 3.8h7.4" stroke="currentColor" strokeWidth="0.8" />
    </svg>
  ),
}

export const pillInputClass =
  'h-full w-full bg-transparent text-[9px] text-ink placeholder:text-muted-light/60 focus:outline-none md:text-[10px]'

export function PillField({
  label,
  icon,
  multiline = false,
  children,
}: {
  label: string
  icon?: ReactNode
  multiline?: boolean
  children: ReactNode
}) {
  const box = multiline
    ? 'h-[52px] items-start py-[10px] md:h-[58px]'
    : 'h-[36px] items-center md:h-[39px]'
  return (
    <label className="relative block">
      <span className="absolute -top-[7px] left-[6px] rounded-full bg-[#1c1a17] px-[7px] py-[2px] font-serif text-[7px] leading-none text-cream md:text-[8px]">
        {label}
      </span>
      <span
        className={`flex gap-[9px] rounded-[3px] border border-[#9a9282] px-[14px] text-muted-light/70 focus-within:border-ink ${box}`}
      >
        {icon}
        {children}
      </span>
    </label>
  )
}

/** Beige panel that holds a PillField form, with the submit button bottom-right. */
export function FormCard({
  onSubmit,
  button,
  status,
  heading,
  intro,
  className = 'md:pt-[46px]',
  children,
}: {
  onSubmit: (e: FormEvent) => void
  button: ReactNode
  status?: ReactNode
  heading?: string
  intro?: string
  className?: string
  children: ReactNode
}) {
  return (
    <form
      onSubmit={onSubmit}
      className={`mt-[44px] bg-cream-2 px-[17px] pt-[38px] pb-[24px] md:mt-0 md:rounded-[2px] md:px-[29px] md:pb-[30px] ${className}`}
    >
      {heading && (
        <div className="mb-[30px] md:mb-[36px]">
          <h2 className="font-serif text-[18px] text-ink md:text-[21px]">{heading}</h2>
          {intro && <p className="mt-1.5 text-[9.5px] leading-[1.7] text-muted-light md:text-[10.5px]">{intro}</p>}
        </div>
      )}
      <div className="space-y-[26px] md:space-y-[37px]">{children}</div>
      <div className="mt-[30px] flex flex-col items-end gap-3 md:mt-[46px]">
        <button
          type="submit"
          className="rounded-[2px] bg-[#1c1a17] px-[10px] py-[7px] text-[7px] font-semibold text-cream transition-colors hover:bg-black md:px-[17px] md:py-[10px] md:text-[11px]"
        >
          {button}
        </button>
        {status && (
          <p role="status" className="max-w-[300px] text-right text-[9px] leading-[1.6] text-muted-light md:text-[10px]">
            {status}
          </p>
        )}
      </div>
    </form>
  )
}
