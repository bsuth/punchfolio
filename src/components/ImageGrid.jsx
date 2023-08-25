import styles from './ImageGrid.module.scss';

export default props => {
  // Some hacky logic to extract images from markdown
  const wrapperReactNode = props.children;
  const imageReactNodes = wrapperReactNode.props.children.filter(
    // Remove any non-ReactElement children
    child => child !== null && typeof child === 'object',
  );

  return (
    <div
      className={styles.imageGrid}
      children={imageReactNodes}
      style={{
        gap: props.gap,
        gridTemplateRows: props.rows && `repeat(${props.rows}, 1fr)`,
        gridTemplateColumns: props.columns && `repeat(${props.columns}, 1fr)`,
      }}
    />
  );
};
