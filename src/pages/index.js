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
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.leftSection}>
          <img src="/img/hero-image.svg" alt="Hero" />
        </div>
        <div className={styles.rightSection}>
          <Heading as="h1" className={styles.heroTitle}>
            <strong>Dan Wu</strong> 的技術筆記
          </Heading>
          <p className={styles.heroSubtitle}>
            這邊紀錄了我在軟體技術領域中的學習紀錄與實踐經歷，<br />
            分享我的觀點與解決過程。
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/category">
              開始探索 🚀
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="記錄前端開發與專案實作心得的技術筆記網站。">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
