import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";
import Sheet from "../Sheet";
import SheetStyles from "../Sheet/index.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Sheet className2={SheetStyles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/logo.svg" alt="" width="1267" height="319" />
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link href="/">会社概要</Link>
            </li>
            <li className={styles.item}>
              <Link href="/">利用規約</Link>
            </li>
            <li className={styles.item}>
              <Link href="/">プライバシーポリシー</Link>
            </li>
            <li className={styles.item}>
              <Link href="/">お問い合わせ</Link>
            </li>
          </ul>
        </nav>
        <small className={styles.copyright}>&copy; 2024 CWstudio</small>
      </Sheet>
    </footer>
  );
}
