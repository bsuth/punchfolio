import styles from './ImageLayout.module.scss';

function extractMarkdownImages(props) {
  // Some hacky logic to extract images from markdown
  const wrapperReactNode = props.children;
  return wrapperReactNode.props.children.filter(
    // Remove any non-ReactElement children
    child => child !== null && typeof child === 'object',
  );
}

export const ImageRow = props => (
  <div
    className={styles.imageRow}
    children={extractMarkdownImages(props)}
    style={{ gap: props.gap }}
  />
);

export const ImageGrid = props => (
  <div
    className={styles.imageGrid}
    children={extractMarkdownImages(props)}
    style={{
      gap: props.gap,
      gridTemplateRows: props.rows && `repeat(${props.rows}, 1fr)`,
      gridTemplateColumns: props.columns && `repeat(${props.columns}, 1fr)`,
    }}
  />
);
