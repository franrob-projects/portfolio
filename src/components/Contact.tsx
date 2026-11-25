import type {FormEvent, ReactNode} from 'react';
import styles from '../css/work.module.css';

const EMAIL = 'fran@franrob.design';
export const WHATSAPP = 'https://wa.me/34678348065?text=' + encodeURIComponent('Hi Francis, I found you through your portfolio.');

export function WaIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.2-1.200l-.3-.2-3 .8.8-2.9-.2-.3A8.200 8.200 0 1 1 12 20.200zm4.500-6.100c-.2-.1-1.500-.7-1.700-.8-.2-.1-.4-.1-.6.100l-.8 1c-.1.200-.3.200-.5.100-1.400-.7-2.400-1.300-3.300-2.900-.2-.3.200-.3.700-1.200.1-.2 0-.3 0-.5l-.8-1.800c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.100-.7.300-.2.300-.9.900-.9 2.200s.9 2.500 1.100 2.700c.1.200 1.900 2.900 4.600 4 1.700.7 2.400.8 3.200.6.500-.1 1.500-.6 1.700-1.200.2-.6.2-1.100.2-1.200-.1-.1-.3-.2-.5-.3z"/>
    </svg>
  );
}

export default function Contact(): ReactNode {
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = [
      `Goal: ${f.get('goal')}`,
      `Timeline: ${f.get('timeline')}`,
      `Budget: ${f.get('budget')}`,
      `From: ${f.get('name')} (${f.get('email')})`,
      '',
      String(f.get('brief') ?? ''),
    ].join('\n');
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent('Project brief: ' + f.get('goal'))}&body=${encodeURIComponent(body)}`;
  };
  return (
    <section id="contact" className={styles.contact} aria-labelledby="contact-h">
      <div>
        <h2 id="contact-h">Have a project in mind?</h2>
        <p>Tell me what you are trying to do. I reply within two working days.</p>
        <a className={styles.email} href={`mailto:${EMAIL}`}>{EMAIL}</a>
        <p style={{marginTop: '1.25rem'}}>
          <a className={`${styles.btn} ${styles.btnWa}`} href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="Message Francis on WhatsApp, opens in a new tab">
            <WaIcon /> WhatsApp +34 678 34 80 65
          </a>
        </p>
      </div>
      <form className={styles.form} onSubmit={submit}>
        <div className={styles.formRow}>
          <label>Your name<input name="name" required autoComplete="name" /></label>
          <label>Email<input name="email" type="email" required autoComplete="email" /></label>
        </div>
        <label>What do you need?
          <select name="goal" defaultValue="A website or landing page">
            <option>A website or landing page</option>
            <option>CRM setup or redesign</option>
            <option>Product or marketing copy</option>
            <option>Something else</option>
          </select>
        </label>
        <div className={styles.formRow}>
          <label>Timeline
            <select name="timeline" defaultValue="Within a month">
              <option>As soon as possible</option>
              <option>Within a month</option>
              <option>Within three months</option>
              <option>No fixed date</option>
            </select>
          </label>
          <label>Budget range
            <select name="budget" defaultValue="Not sure yet">
              <option>Under 2,000 EUR</option>
              <option>2,000 to 5,000 EUR</option>
              <option>5,000 to 10,000 EUR</option>
              <option>Over 10,000 EUR</option>
              <option>Not sure yet</option>
            </select>
          </label>
        </div>
        <label>A few lines about it<textarea name="brief" /></label>
        <div><button className={`${styles.btn} ${styles.btnSolid}`} type="submit">Send brief</button></div>
        <p className={styles.note}>This opens your email app with the details filled in.</p>
      </form>
    </section>
  );
}
