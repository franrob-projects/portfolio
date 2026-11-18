import type {FormEvent, ReactNode} from 'react';
import styles from '../css/work.module.css';

const EMAIL = 'francis@fantasyfruitsatlife.com';

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
