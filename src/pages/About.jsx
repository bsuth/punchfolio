import AboutMarkdown, { frontMatter } from '@site/content/about.md';
import Layout from '@theme/Layout';
import styles from './About.module.scss';

export default () => (
  <Layout title="About">
    <section className={styles.about}>
      <div className={styles.markdown} children={<AboutMarkdown />} />
      <img
        className={styles.img}
        src={require(`@site/static/${frontMatter.image}`).default}
        alt="picture of punch"
      />
    </section>
  </Layout>
);
