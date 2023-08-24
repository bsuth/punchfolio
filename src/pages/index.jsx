import { frontMatter } from '@site/content/index.md';
import Layout from '@theme/Layout';
import styles from './index.module.scss';

export default () => (
  <Layout>
    <h1 className={styles.title} children={frontMatter.title} />
    Scroll down to see my projects
  </Layout>
);
