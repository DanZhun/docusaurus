import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '技術雜談＆近期專案',
    imgPath: '/img/blog.svg',
    description: (
      <>
        <a href="#">部落格</a> 這邊紀錄我技術中的點點滴滴。
      </>
    ),
  },
  {
    title: '輸出學習，知識吸收',
    imgPath: '/img/note.svg',
    description: (
      <>
        <a href="#">筆記</a> 這邊紀錄我學習的過程和遇到問題的解決方法。
      </>
    ),
  },
  {
    title: '近期實作',
    imgPath: '/img/projects.svg',
    description: (
      <>
        <a href="#">近期實作</a> 這邊紀錄了我近期製作的有趣專案。
      </>
    ),
  },
];

function Feature({imgPath, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={imgPath} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
