import Link from '@docusaurus/Link';
import { frontMatter } from '@site/content/index.md';
import Layout from '@theme/Layout';
import styles from './index.module.scss';

// -----------------------------------------------------------------------------
// ProjectPreview
// -----------------------------------------------------------------------------

const ProjectPreview = props => {
  const thumbnailSrc =
    require(`@site/content/projects/${props.id}/thumbnail.webp`).default;

  return (
    <Link className={styles.projectPreview} to={`/projects/${props.id}`}>
      <img
        className={styles.thumbnail}
        src={thumbnailSrc}
        alt={`${props.id}-thumbnail`}
      />
      <div className={styles.titles}>
        <h2 className={styles.title} children={props.title} />
        <h3 className={styles.subtitle} children={props.subtitle} />
      </div>
    </Link>
  );
};

// -----------------------------------------------------------------------------
// Main
// -----------------------------------------------------------------------------

export default () => (
  <Layout wrapperClassName={styles.index}>
    <header className={styles.header}>
      <h1 className={styles.title} children={frontMatter.title} />
      {frontMatter.subtitle}
    </header>
    <ul className={styles.projects}>
      {frontMatter.projects.map(project => (
        <li children={<ProjectPreview {...project} />} />
      ))}
    </ul>
  </Layout>
);
