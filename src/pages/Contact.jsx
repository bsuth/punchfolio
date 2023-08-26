import ContactMarkdown from '@site/content/contact.md';
import Layout from '@theme/Layout';
import styles from './Contact.module.scss';

// https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg
const GmailSvg = () => (
  <svg
    className={styles.contactSvg}
    viewBox="52 42 88 66"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6" />
    <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15" />
    <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2" />
    <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92" />
    <path
      fill="#c5221f"
      d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"
    />
  </svg>
);

// https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg
const LinkedInSvg = () => (
  <svg
    className={styles.contactSvg}
    viewBox="0 0 72 72"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fillRule="evenodd">
      <path
        d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z"
        fill="#007EBB"
      />
      <path
        d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z"
        fill="#FFF"
      />
    </g>
  </svg>
);

const ContactLink = props => (
  <a
    className={styles.contactLink}
    href={props.href}
    target="_blank"
    children={
      <>
        {props.icon}
        {props.text}
      </>
    }
  />
);

export default () => (
  <Layout title="Contact" wrapperClassName={styles.contact}>
    <ContactMarkdown />
    <div className={styles.links}>
      <ContactLink
        href="mailto:wipawee.tant@gmail.com"
        icon={<GmailSvg />}
        text="wipawee.tant@gmail.com"
      />
      <ContactLink
        href="https://www.linkedin.com/in/wipaweetant/"
        icon={<LinkedInSvg />}
        text="wipaweetant"
      />
    </div>
  </Layout>
);
