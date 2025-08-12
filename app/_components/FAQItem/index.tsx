import styles from "./index.module.css";
import { FAQ } from "@/app/_libs/microcms";

type Props = {
  faq: FAQ[];
};

export default function FAQItem({ faq }: Props) {
  return (
    <ul className={styles.List}>
      {faq.map((item, index) => (
        <li key={index} className={styles.item}>
          <h3 className={`${styles.question} ${styles.text}`}>
            {item.question}
          </h3>
          <div className={`${styles.answer} ${styles.text}`}>
            <p>
              {(() => {
                const onlyText = item.answer.every((a) => a.type === "text");
                // ①：テキストのみ 1要素 → そのまま
                if (onlyText && item.answer.length === 1) {
                  return item.answer[0].value;
                }
                // ②：テキストのみ 複数 → spanで分割
                if (onlyText && item.answer.length > 1) {
                  return item.answer.map((part, i) => (
                    <span key={i}>{part.value}</span>
                  ));
                }
                // ③：リンクを含む場合 → テキストはそのまま出力
                return item.answer.map((part, i) =>
                  part.type === "link" ? (
                    <a key={i} href={part.href}>
                      {part.value}
                    </a>
                  ) : (
                    part.value
                  )
                );
              })()}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
