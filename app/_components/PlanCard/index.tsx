import styles from "./index.module.css";
import { Plan } from "@/app/_libs/microcms";

type Props = {
  plan: Plan[];
};

export default function PlanCard({ plan }: Props) {
  return (
    <ul className={styles.list}>
      {plan.map((plan) => (
        <li
          key={plan.id}
          className={`${styles.item} ${plan.isPaid ? styles.paid : ""}`}
        >
          <h3 className={styles.title}>{plan.title}</h3>
          <p className={styles.priceTitle}>{plan.priceTitle}</p>
          <p className={styles.price}>{plan.price}円</p>
          <p className={styles.functionTitle}>{plan.functionTitle}</p>
          <div className={styles.functionListWrap}>
            <ul className={styles.functionList}>
              {plan.functions.map((func, index) => (
                <li key={index} className={styles.functionItem}>
                  {func}
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
}
