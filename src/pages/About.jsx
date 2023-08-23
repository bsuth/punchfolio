import Layout from '@theme/Layout';
import AboutMarkdown from '@site/content/About.md';
import styles from './About.module.scss';

export default () => {
  return (
    <Layout title="About">
      <section className={styles.about}>
        <div className={styles.markdown} children={<AboutMarkdown />} />
        <img className={styles.img} src="/punch-about.jpg" alt="punch profile" />
      </section>
    </Layout>
  );
}
