import styles from "./index.module.css";
import ButtonLink from "../ButtonLink";
import ButtonLinkStyles from "../ButtonLink/index.module.css";
import InputText from "../InputText";
import Checkbox from "../Checkbox";

export default function SignUpForm() {
  return (
    <>
      <p className={styles.title}>\ 無料登録 /</p>
      <div className={styles.body}>
        <form action="https://hoge.com" className={styles.form}>
          <div>
            <label htmlFor="email" className={styles.label}>
              メールアドレス
            </label>
            <div className={styles.text}>
              <InputText
                type="email"
                name="email"
                id="email"
                className={styles.input}
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className={styles.label}>
              パスワード
            </label>
            <div className={styles.text}>
              <InputText
                type="password"
                name="password"
                id="password"
                className={styles.input}
              />
            </div>
          </div>
          <div className={styles.checkbox}>
            <Checkbox />
          </div>
          <div>
            <ButtonLink
              type="button"
              className={`${ButtonLinkStyles.buttonBlack} ${ButtonLinkStyles.buttonSigin} ${styles.button}`}
            >
              登録する
            </ButtonLink>
          </div>
        </form>
      </div>
      </>
  );
}
