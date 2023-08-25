import styles from './Vimeo.module.scss';

export default props => (
  <iframe
    className={styles.vimeo}
    src={`${props.src}?muted=true&portrait=false&title=false`}
    frameborder="0"
    allow="fullscreen"
  />
);
