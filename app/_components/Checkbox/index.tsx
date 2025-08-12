import styles from "./index.module.css";

export default function Checkbox() {
  return (
    <label className={styles.label}>
      <input type="checkbox" name="" value="" className={styles.checkbox} />
      <span className={styles.text}>
        <a
          href="http://google.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          利用規約
        </a>
        に同意する
      </span>
    </label>
  );
}
