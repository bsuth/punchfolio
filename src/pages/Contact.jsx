import ContactMarkdown, { frontMatter } from '@site/content/contact.md';
import Layout from '@theme/Layout';

export default () => (
  <Layout title="About">
    <ContactMarkdown />
  </Layout>
);
