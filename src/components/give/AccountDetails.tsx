import { useState } from 'react'

type Account = { bank: string; name: string; number: string }

// TODO(PGC): these are the design's placeholder account numbers. Replace with PGC's real accounts before launch.
const groups: { title: string; accounts: Account[] }[] = [
  {
    title: 'Local Banks',
    accounts: [
      { bank: 'Zenith Bank:', name: 'Peculiar Generation Church', number: '0112546224' },
      { bank: 'UBA:', name: 'Peculiar Generation Church', number: '0112546224' },
      { bank: 'FCMB:', name: 'Peculiar Generation Church', number: '0112546224' },
      { bank: 'First Bank:', name: 'Peculiar Generation Church', number: '0112546224' },
    ],
  },
  {
    title: 'International Banks',
    accounts: [
      { bank: 'Zenith Bank:', name: 'Peculiar Generation Church', number: '0112546224' },
      { bank: 'UBA:', name: 'Peculiar Generation Church', number: '0112546224' },
      { bank: 'FCMB:', name: 'Peculiar Generation Church', number: '0112546224' },
      { bank: 'First Bank:', name: 'Peculiar Generation Church', number: '0112546224' },
    ],
  },
]

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // Clipboard can be unavailable (e.g. insecure context); the number is still selectable.
    }
  }
  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? 'Copied' : `Copy ${label} account number`}
      className="text-muted-light/70 transition-colors hover:text-ink"
    >
      {copied ? (
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
          <path d="M1.5 5.2l2.2 2.2 4.8-4.9" stroke="currentColor" strokeWidth="1.1" />
        </svg>
      ) : (
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
          <rect x="3" y="3" width="5.5" height="5.5" rx="1" stroke="currentColor" strokeWidth="0.8" />
          <path d="M6.5 1.5H2.5a1 1 0 00-1 1v4" stroke="currentColor" strokeWidth="0.8" />
        </svg>
      )}
    </button>
  )
}

export default function AccountDetails() {
  return (
    <div>
      <h2 className="font-serif text-[21px] leading-tight md:text-[34px]">Account Details</h2>
      <div className="mt-[22px] space-y-[26px] md:mt-[34px] md:space-y-[40px]">
        {groups.map((g) => (
          <div key={g.title}>
            <p className="text-[8px] font-medium text-ink/80 md:text-[11px]">{g.title}</p>
            <ul className="mt-[6px] md:mt-[10px]">
              {g.accounts.map((a) => (
                <li
                  key={a.bank}
                  className="grid grid-cols-[76px_1fr_auto_auto] items-center gap-x-2 py-[5px] text-[8px] text-muted-light md:grid-cols-[77px_152px_auto_auto] md:py-[6px] md:text-[11.5px]"
                >
                  <span>{a.bank}</span>
                  <span>{a.name}</span>
                  <span className="tabular-nums">{a.number}</span>
                  <CopyButton value={a.number} label={a.bank.replace(':', '')} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
