import Link from '@docusaurus/Link';
import { useThemeConfig } from '@docusaurus/theme-common';
import Logo from '@site/src/components/Logo';
import clsx from 'clsx';
import styles from './index.module.scss';

export default () => {
  const themeConfig = useThemeConfig();

  return (
    <Link to="/" className={clsx(styles.navbarLogo, 'navbar__brand')}>
      <Logo className="navbar__logo" />
      <b
        className="navbar__title text--truncate"
        children={themeConfig.navbar.title}
      />
    </Link>
  );
};
