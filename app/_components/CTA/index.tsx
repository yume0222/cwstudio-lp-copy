import ButtonLink from "../ButtonLink";
import ButtonLinkStyles from "../ButtonLink/index.module.css";
import Sheet from "../Sheet";
import SheetStyles from "../Sheet/index.module.css";
import styles from "./index.module.css";

export default function CTA() {
  return (
    <Sheet
      className1={`${SheetStyles.ptb} ${styles.bg}`}
      className2={SheetStyles.container}
    >
      <p className={styles.text}>
        <span>今なら30日全機能無料で</span>
        <span>使用できます！</span>
      </p>
      <p className={styles.text02}>月500円で使える小説執筆ツール</p>
      <div className={styles.button}>
        <ButtonLink
          href="/"
          className={`${ButtonLinkStyles.buttonAccent} ${ButtonLinkStyles.buttonCenter} ${ButtonLinkStyles.buttonCta}`}
        >
          試しに無料で使ってみる
        </ButtonLink>
      </div>
    </Sheet>
  );
}
