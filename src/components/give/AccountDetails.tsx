import { useState } from 'react'
import { Link } from 'react-router-dom'

type Account = { bank: string; name: string; number: string; extra?: { label: string; value: string }[] }

// TODO(PGC): add accounts only once the finance team has independently confirmed them.
// International accounts can add rows like { label: 'SWIFT/BIC', value: '…' } or { label: 'Currency', value: 'USD' }.
const localAccounts: Account[] = []
const internationalAccounts: Account[] = []

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

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[110px_1fr] items-center gap-x-2 py-[4px] md:grid-cols-[120px_1fr]">
      <dt className="text-ink/60">{label}</dt>
      <dd className="flex items-center gap-2 text-muted-light">{children}</dd>
    </div>
  )
}

function AccountGroup({ title, intro, accounts }: { title: string; intro: string; accounts: Account[] }) {
  return (
    <div>
      <p className="text-[11px] font-medium text-ink/80 md:text-[12px]">{title}</p>
      <p className="mt-1.5 max-w-[360px] text-[10px] leading-[1.7] text-muted-light md:text-[11px]">{intro}</p>
      {accounts.length === 0 ? (
        <p className="mt-3 max-w-[360px] border-l-2 border-gold/50 pl-3 text-[10px] leading-[1.7] text-muted-light md:text-[11px]">
          Verified account details will be published here soon. In the meantime,{' '}
          <Link to="/contact" className="text-ink underline underline-offset-2">
            contact us
          </Link>{' '}
          for giving details.
        </p>
      ) : (
        <div className="mt-3 space-y-4">
          {accounts.map((a) => (
            <dl key={a.bank + a.number} className="text-[10px] md:text-[11.5px]">
              <Row label="Bank">{a.bank}</Row>
              <Row label="Account name">{a.name}</Row>
              <Row label="Account number">
                <span className="tabular-nums">{a.number}</span>
                <CopyButton value={a.number} label={a.bank} />
              </Row>
              {a.extra?.map((e) => (
                <Row key={e.label} label={e.label}>
                  {e.value}
                </Row>
              ))}
            </dl>
          ))}
        </div>
      )}
    </div>
  )
}

export default function AccountDetails() {
  return (
    <div>
      <h2 className="font-serif text-[21px] leading-tight md:text-[34px]">Bank transfer</h2>
      <div className="mt-[22px] space-y-[30px] md:mt-[30px] md:space-y-[40px] md:pr-10">
        <AccountGroup
          title="Local transfers"
          intro="You can support PGC by bank transfer using the verified account details below."
          accounts={localAccounts}
        />
        <AccountGroup
          title="International giving"
          intro="For international transfers, use the verified instructions below or contact the church for assistance."
          accounts={internationalAccounts}
        />
      </div>
    </div>
  )
}
