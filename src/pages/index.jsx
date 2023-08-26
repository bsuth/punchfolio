import Link from '@docusaurus/Link';
import { frontMatter } from '@site/content/index.md';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
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
      <img
        className={styles.thumbnail}
        src={thumbnailSrc}
        alt={`${props.id}-thumbnail`}
      />
      <div className={styles.titles}>
        <h2 className={styles.title} children={props.title} />
        <p className={styles.subtitle} children={props.subtitle} />
      </div>
    </Link>
  );
};

// -----------------------------------------------------------------------------
// Main
// -----------------------------------------------------------------------------

export default () => {
  const [scrollClassName, setScrollClassName] = useState(styles.hide);

  useEffect(() => {
    const eventListener = () =>
      void setScrollClassName(
        document.scrollingElement.scrollTop > 64 ? styles.show : styles.hide,
      );

    eventListener(); // update on mount
    addEventListener('scroll', eventListener);
    return () => void removeEventListener('scroll', eventListener);
  }, []);

  return (
    <Layout wrapperClassName={styles.index}>
      <header className={styles.header}>
        <h1 className={styles.title} children={frontMatter.title} />
        {frontMatter.subtitle}
      </header>
      <ul className={clsx(styles.projects, scrollClassName)}>
        {frontMatter.projects.map(project => (
          <li key={project.id} children={<ProjectPreview {...project} />} />
        ))}
      </ul>
    </Layout>
  );
};
