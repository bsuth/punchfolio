import { frontMatter } from '@site/content/index.md';
import Layout from '@theme/Layout';
import styles from './index.module.scss';

// -----------------------------------------------------------------------------
// ProjectPreview
// -----------------------------------------------------------------------------

const ProjectPreview = props => (
  <div className={styles.projectPreview}>
    <img src={`/${props.image}`} />
    <div className={styles.text}>
      <h2 children={props.title} />
      <h3 children={props.subtitle} />
      <p children={props.description} />
    </div>
  </div>
);

// -----------------------------------------------------------------------------
// Main
// -----------------------------------------------------------------------------

export default () => (
  <Layout wrapperClassName={styles.index}>
    <header className={styles.header}>
      <h1 className={styles.title} children={frontMatter.title} />
      Scroll down to see my projects
    </header>
    <ul className={styles.projects}>
      {frontMatter.projects.map(project => (
        <li>
          <ProjectPreview {...project} />
        </li>
      ))}
    </ul>
  </Layout>
);
