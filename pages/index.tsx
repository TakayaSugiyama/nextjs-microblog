import Layout from "../components/Layout";
import utilStyles from "../styles/util.module.css";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { getPostsData } from "../lib/post";

// SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }: any) {
  return (
    <Layout home>
      <section className={utilStyles.headingMd}>
        <p>ゆるふわエンジニアです。リラックマが好きです。</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2>📝 エンジニアのブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map((post: any, index: number) => {
            return (
              <article key={index}>
                <Link href={`/posts/${post.id}`}>
                  <img
                    src={post?.thumbnail}
                    alt="サムネイル"
                    className={styles.thumbnailImage}
                  />
                </Link>
                <Link href={`/posts/${post.id}`} legacyBehavior>
                  <a className={utilStyles.boldText}>{post?.title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>{post.date}</small>
              </article>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
