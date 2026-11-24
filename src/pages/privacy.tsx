import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import styles from '../css/work.module.css';

export default function Privacy(): ReactNode {
  return (
    <Layout title="Privacy" description="How this site handles your data.">
      <main className={styles.wrap}>
        <header className={styles.hero}>
          <div className={styles.eyebrow}>Privacy</div>
          <h1>Privacy note.</h1>
          <p className="lead">Short version: this site does not track you.</p>
        </header>
        <div style={{maxWidth: 720}}>
          <h2>What the site collects</h2>
          <p>Nothing automatically. There are no analytics, advertising or tracking cookies on this site.</p>
          <h2>The contact form</h2>
          <p>The form does not send data to a server. When you press “Send brief”, it opens your own email app with the details filled in. Nothing is sent until you send that email yourself.</p>
          <h2>If you write to me</h2>
          <p>If you email or message me on WhatsApp, I use what you send only to reply and to work on your project. I don’t pass it to anyone else. Ask me and I’ll delete it.</p>
          <h2>Podcast page</h2>
          <p>The podcast page shows the video thumbnail, which loads from YouTube. The video player itself only loads when you press play, and then it comes from YouTube’s privacy-enhanced domain.</p>
          <h2>Other sites</h2>
          <p>Some pages link to other sites, such as GitHub and WhatsApp. They have their own privacy policies.</p>
          <h2>Contact</h2>
          <p>Francis Roberts, Málaga, Spain. <a href="mailto:francisroberts@live.com">francisroberts@live.com</a></p>
          <p style={{color: 'var(--meta)'}}>Last updated: 18 November 2026.</p>
        </div>
      </main>
    </Layout>
  );
}
