import HEAD from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/util.module.css";
import Link from "next/link";

export const siteTitle = "Next.js Blog";
const Layout = ({ children, home }: any) => {
  const name = "🐻";
  return (
    <div className={styles.container}>
      <HEAD>
        <link rel="icon" href="/favicon.ico" />
      </HEAD>
      <header className={styles.header}>
        <Image
          src="/images/profile.jpeg"
          alt="リラックマ"
          width={150}
          height={150}
          className={utilStyles.borderCircle}
        />
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </header>

      <main>{children}</main>
      {!home && <Link href="/">homeに戻る</Link>}
    </div>
  );
};
export default Layout;
