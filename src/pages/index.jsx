import Link from '@docusaurus/Link';
import { frontMatter } from '@site/content/index.md';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './index.module.scss';

// -----------------------------------------------------------------------------
// ProjectPreview
// -----------------------------------------------------------------------------

const ProjectPreview = props => {
  const thumbnailSrc =
    require(`@site/content/projects/${props.id}/thumbnail.webp`).default;

  return (
    <Link
      className={clsx(styles.projectPreview, styles[props.type])}
      to={`/projects/${props.id}`}
    >
      <div className={styles.titles}>
        <h2 className={styles.title} children={props.title} />
        <p className={styles.subtitle} children={props.subtitle} />
      </div>
      <img
        className={styles.thumbnail}
        src={thumbnailSrc}
        alt={`${props.id}-thumbnail`}
      />
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
