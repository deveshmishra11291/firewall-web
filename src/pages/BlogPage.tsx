import React from 'react';
import { DocsPage } from './DocsPage';

// Re-export DocsPage for seamless backward compatibility with /blog
export const BlogPage: React.FC = () => {
  return <DocsPage />;
};

export default BlogPage;
