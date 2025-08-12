import Image from "next/image";
import styles from "./index.module.css";
import ButtonLink from "../ButtonLink";
import ButtonLinkStyles from "../ButtonLink/index.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <Link href="/">
          <Image src="/logo.svg" alt="" width="1267" height="319" />
        </Link>
      </h1>
      <div className={styles.buttonBox}>
        <div className={styles.button}>
          <ButtonLink href="" className={`${ButtonLinkStyles.buttonWhite} ${ButtonLinkStyles.buttonHeader}`}>
            ログイン
          </ButtonLink>
        </div>
        <div className={styles.button}>
          <ButtonLink href="" className={`${ButtonLinkStyles.buttonAccent} ${ButtonLinkStyles.buttonHeader}`}>
            新規登録
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
