import GithubMark from '@site/src/components/GithubMark';
import Logo from '@site/src/components/Logo';
import styles from './index.module.scss';

export default () => (
  <footer className={styles.footer}>
    <div className={styles.brand} children="Punchfolio" />
    <div>
      Designed by
      <div className={styles.logoName}>
        <Logo className={styles.punchLogo} />
        Punch
      </div>
    </div>
    <a href="https://github.com/bsuth" target="_blank">
      Developed by
      <div className={styles.logoName}>
        <GithubMark className={styles.githubMark} />
        bsuth
      </div>
    </a>
  </footer>
);
