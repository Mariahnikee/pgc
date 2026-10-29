import { useState, type FormEvent } from 'react'
import { FormCard, PillField, fieldIcons, pillInputClass } from '../PillField'

const naira = new Intl.NumberFormat('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

export default function GiveForm() {
  const [amount, setAmount] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const value = Number(amount.replace(/[^\d.]/g, '')) || 1000

  // No payment provider is connected yet, so the form only confirms the details locally.
  const submit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <FormCard
      onSubmit={submit}
      button={`Give ₦${naira.format(value)}`}
      status={
        submitted && "Thank you! Online payment isn't connected yet — please give through one of the accounts listed."
      }
    >
      <PillField label="Full name" icon={fieldIcons.user}>
        <input required name="name" placeholder="Input name" className={pillInputClass} />
      </PillField>
      <PillField label="Email" icon={fieldIcons.mail}>
        <input required type="email" name="email" placeholder="Input email" className={pillInputClass} />
      </PillField>
      <PillField label="Phone number" icon={fieldIcons.phone}>
        <input type="tel" name="phone" placeholder="Input phone number" className={pillInputClass} />
      </PillField>
      <PillField label="Amount" icon={fieldIcons.wallet}>
        <input
          required
          name="amount"
          inputMode="decimal"
          placeholder="Input amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className={pillInputClass}
        />
      </PillField>
    </FormCard>
  )
}
