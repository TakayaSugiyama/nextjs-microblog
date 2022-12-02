import Layout from "../components/Layout";
import utilStyles from "../styles/util.module.css";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <p>エンジニアです。リラックマが好きです。</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2>📝 エンジニアのブログ</h2>
        <div className={styles.grid}>
          <article>
            <Link href="/">
              <img
                src="images/thumbnail01.jpg"
                alt="サムネイル1"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/" legacyBehavior>
              <a className={utilStyles.boldText}>
                SSGとSSRの使い分けの場面はいつなのか?
              </a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>Febrary 23, 2020</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="images/thumbnail01.jpg"
                alt="サムネイル1"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/" legacyBehavior>
              <a className={utilStyles.boldText}>
                SSGとSSRの使い分けの場面はいつなのか?
              </a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>Febrary 23, 2020</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="images/thumbnail01.jpg"
                alt="サムネイル1"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/" legacyBehavior>
              <a className={utilStyles.boldText}>
                SSGとSSRの使い分けの場面はいつなのか?
              </a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>Febrary 23, 2020</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="images/thumbnail01.jpg"
                alt="サムネイル1"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/" legacyBehavior>
              <a className={utilStyles.boldText}>
                SSGとSSRの使い分けの場面はいつなのか?
              </a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>Febrary 23, 2020</small>
          </article>
        </div>
      </section>
    </Layout>
  );
}
