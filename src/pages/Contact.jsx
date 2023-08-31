import ContactMarkdown from '@site/content/contact.md';
import Layout from '@theme/Layout';
import styles from './Contact.module.scss';

const MailSvg = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16 0C18.2095 0 20.2857 0.419048 22.2286 1.25714C24.1714 2.09524 25.8667 3.2381 27.3143 4.68571C28.7619 6.13333 29.9048 7.82857 30.7429 9.77143C31.581 11.7143 32 13.7905 32 16C32 18.2095 31.581 20.2857 30.7429 22.2286C29.9048 24.1714 28.7619 25.8667 27.3143 27.3143C25.8667 28.7619 24.1714 29.9048 22.2286 30.7429C20.2857 31.581 18.2095 32 16 32C13.7905 32 11.7143 31.581 9.77143 30.7429C7.82857 29.9048 6.13333 28.7619 4.68571 27.3143C3.2381 25.8667 2.09524 24.1714 1.25714 22.2286C0.419048 20.2857 0 18.2095 0 16C0 13.7905 0.419048 11.7143 1.25714 9.77143C2.09524 7.82857 3.2381 6.13333 4.68571 4.68571C6.13333 3.2381 7.82857 2.09524 9.77143 1.25714C11.7143 0.419048 13.7905 0 16 0ZM7.00952 20.1524L11.8095 16.7238L7.00952 13.2952V20.1524ZM24.9905 21.6762L19.1238 17.4857L16 19.7333L12.8381 17.4857L7.00952 21.6762V24H24.9905V21.6762ZM24.9905 13.2952L20.1905 16.7238L24.9905 20.1524V13.2952ZM24.9905 8H7.00952V10.3238L16 16.7238L24.9905 10.3238V8Z" />
  </svg>
);

const LinkedInSvg = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15.9809 0C18.1983 0 20.2756 0.42055 22.2127 1.26165C24.1497 2.10275 25.8447 3.24333 27.2975 4.68339C28.7503 6.12346 29.8973 7.81203 30.7383 9.7491C31.5794 11.6862 32 13.7634 32 15.9809C32 18.1983 31.5794 20.2756 30.7383 22.2127C29.8973 24.1497 28.7503 25.8447 27.2975 27.2975C25.8447 28.7503 24.1497 29.8973 22.2127 30.7383C20.2756 31.5794 18.1983 32 15.9809 32C13.7634 32 11.6862 31.5794 9.7491 30.7383C7.81203 29.8973 6.12346 28.7503 4.68339 27.2975C3.24333 25.8447 2.10275 24.1497 1.26165 22.2127C0.42055 20.2756 0 18.1983 0 15.9809C0 13.7634 0.42055 11.6862 1.26165 9.7491C2.10275 7.81203 3.24333 6.12346 4.68339 4.68339C6.12346 3.24333 7.81203 2.10275 9.7491 1.26165C11.6862 0.42055 13.7634 0 15.9809 0ZM11.0108 12.0048H6.99642V25.0036H11.0108V12.0048ZM8.98447 10.9725C9.5452 10.9725 10.0231 10.7814 10.4182 10.399C10.8132 10.0167 11.0108 9.5452 11.0108 8.98447C11.0108 8.42374 10.8132 7.95221 10.4182 7.56989C10.0231 7.18757 9.5452 6.99642 8.98447 6.99642C8.42374 6.99642 7.95221 7.18757 7.56989 7.56989C7.18757 7.95221 6.99642 8.42374 6.99642 8.98447C6.99642 9.5452 7.18757 10.0167 7.56989 10.399C7.95221 10.7814 8.42374 10.9725 8.98447 10.9725ZM25.0036 17.4719C25.0036 16.5544 24.7487 15.6559 24.2389 14.7766C23.7292 13.8973 23.0665 13.2282 22.2509 12.7694C21.5117 12.3616 20.6515 12.145 19.6702 12.1195C18.689 12.094 17.7905 12.2597 16.9749 12.6165V12.0048H12.9988V25.0036H16.9749V17.0514L18.6571 16.2485C18.861 16.1466 19.135 16.0956 19.4791 16.0956C19.8232 16.0956 20.0972 16.1593 20.3011 16.2867C20.454 16.3632 20.6069 16.5289 20.7599 16.7838C20.9128 17.0386 20.9892 17.268 20.9892 17.4719V25.0036H25.0036V17.4719Z" />
  </svg>
);

export default () => (
  <Layout title="Contact" wrapperClassName={styles.contact}>
    <ContactMarkdown />
    <div className={styles.links}>
      <a
        href="https://www.linkedin.com/in/wipaweetant/"
        target="_blank"
        children={<LinkedInSvg />}
      />
      <a
        href="mailto:wipawee.tant@gmail.com"
        target="_blank"
        children={<MailSvg />}
      />
    </div>
  </Layout>
);
