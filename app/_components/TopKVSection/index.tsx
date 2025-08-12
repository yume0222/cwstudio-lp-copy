import SignUpForm from "../SignUpForm";
import styles from "./index.module.css";
import Sheet from "../Sheet";
import SheetStyles from "../Sheet/index.module.css";

export default function TopKVSection() {
  return (
    <Sheet className1={styles.bg} className2={SheetStyles.container}>
      <div className={styles.inner}>
        <div className={styles.body}>
          <p className={styles.text}>
            <span>月500円で使える</span>
            <span>小説執筆ツール</span>
          </p>
          <p className={styles.text02}>
            <span>小説の執筆を</span>
            <span>圧倒的に効率化</span>
          </p>
          <ul className={styles.list}>
            <li className={styles.item}>本編の執筆</li>
            <li className={styles.item}>物語の設定</li>
            <li className={styles.item}>プロット作成</li>
            <li className={styles.item}>人物設定</li>
            <li className={styles.item}>時系列整理</li>
            <li className={styles.item}>用語集設定</li>
            <li className={styles.item}>バージョン管理</li>
            <li className={styles.item}>不必要な機能は非表示</li>
            <li className={styles.item}>その他便利な機能</li>
          </ul>
        </div>
        <div className={styles.sigin}>
        <SignUpForm />
        </div>
      </div>
    </Sheet>
  );
}
