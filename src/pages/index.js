import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="bg-[var(--ifm-color-primary)] text-white py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <Heading as="h1" className="text-4xl md:text-5xl font-bold mb-4 text-center">
          {siteConfig.title}
        </Heading>
        <p className="text-xl md:text-2xl mb-8 text-center opacity-90">{siteConfig.tagline}</p>
        <div className="flex justify-center">
          <Link
            className="bg-white text-[var(--ifm-color-primary)] hover:bg-opacity-90 px-6 py-3 rounded-lg font-medium shadow-lg transition-all duration-200"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
