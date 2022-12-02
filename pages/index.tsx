import Layout from "../components/Layout";
import utilStyles from "../styles/util.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <p>エンジニアです。リラックマが好きです。</p>
      </section>

      <div>
        <article>
          <Link href="/"></Link>
        </article>
      </div>
    </Layout>
  );
}
