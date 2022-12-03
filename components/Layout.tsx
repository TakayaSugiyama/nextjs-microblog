import HEAD from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/util.module.css";

export const siteTitle = "Next.js Blog";
const Layout = ({ children }: any) => {
  const name = "Shin Code";
  return (
    <>
      <HEAD>
        <link rel="icon" href="/favicon.ico" />
        <header className={styles.header}>
          <Image
            src="/images/profile.png"
            alt="犬"
            width={150}
            height={150}
            className={utilStyles.borderCircle}
          />
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </header>
      </HEAD>
      <main>{children}</main>
    </>
  );
};
export default Layout;
