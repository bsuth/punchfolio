import Link from '@docusaurus/Link';
import { useThemeConfig } from '@docusaurus/theme-common';
import clsx from 'clsx';
import styles from './index.module.scss';

// -----------------------------------------------------------------------------
// PunchLogo
//
// Modified version of `/static/logo.svg`. SVG is simplified and color is
// controlled based on color mode / hover.
// -----------------------------------------------------------------------------

const LogoSvgFingerStyles = {
  fill: 'none',
  strokeWidth: 1.4045,
  strokeLinecap: 'round',
};

const LogoSvgPalmStyles = {
  fill: 'none',
  strokeWidth: 3.175,
  strokeLinecap: 'butt',
  strokeLinejoin: 'miter',
};

const LogoSvg = props => (
  <svg
    className={props.className}
    width="256"
    height="256"
    viewBox="0 0 67.733332 67.733335"
  >
    <g
      transform="matrix(0,2.2605875,-2.2605875,0,65.578558,-26.329414)"
      style={{ strokeWidth: 1.4045 }}
    >
      <rect
        style={LogoSvgFingerStyles}
        width="4.4118838"
        height="7.8875527"
        x="31.93648"
        y="3.5109079"
        ry="2.2059419"
      />
      <rect
        style={LogoSvgFingerStyles}
        width="4.3525653"
        height="8.449439"
        x="27.525822"
        y="2.1165426"
        ry="2.1762826"
      />
      <path
        style={LogoSvgFingerStyles}
        d="M 23.200016,6.6953754 V 3.2334828 c 0,-1.1839099 0.953112,-2.1370215 2.137022,-2.1370215 1.183909,0 2.137021,0.9531116 2.137021,2.1370215 v 4.9628468"
      />
      <path
        style={LogoSvgFingerStyles}
        d="M 18.904711,6.0080299 V 4.2547614 c 0,-1.2129353 0.976478,-2.1894138 2.189414,-2.1894138 1.212935,0 2.189413,0.9764785 2.189413,2.1894138 v 2.4899685"
      />
    </g>
    <path
      style={LogoSvgPalmStyles}
      d="M 49.588491,56.729905 C 45.333892,61.712498 35.296605,60.520863 30.44707,60.566107 23.150715,60.531113 19.052263,55.724168 17.751462,53.973519 15.726281,51.247976 14.283913,44.395132 14.283913,44.395132"
    />
    <path style={LogoSvgPalmStyles} d="M 17.492478,53.758892 H 4.2996608" />
    <path
      style={LogoSvgPalmStyles}
      d="m 38.531903,18.314524 c 0,0 -8.334681,16.540476 9.328766,18.19531 L 51.722246,19.6728 c 0,0 0.05307,-4.74628 -3.155058,-6.414275 -2.79653,-1.453992 -2.39595,-1.643388 -12.326478,-5.797889 0,0 -3.851788,-1.9288983 -8.051574,2.772256 L 14.459581,22.623988 H 3.0459223"
    />
    <path
      style={LogoSvgPalmStyles}
      d="m 36.91416,30.515027 c 0,0 -5.522753,2.723097 -12.028559,-1.382733"
    />
  </svg>
);

// -----------------------------------------------------------------------------
// NavbarLogo
// -----------------------------------------------------------------------------

export default function NavbarLogo() {
  const themeConfig = useThemeConfig();

  return (
    <Link to="/" className={clsx(styles.navbarLogo, 'navbar__brand')}>
      <LogoSvg className={clsx(styles.logoSvg, 'navbar__logo')} />
      <b
        className="navbar__title text--truncate"
        children={themeConfig.navbar.title}
      />
    </Link>
  );
}
