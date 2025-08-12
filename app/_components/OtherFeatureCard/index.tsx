import Image from "next/image";
import styles from "./index.module.css";
import { OtherFeature } from "@/app/_libs/microcms";

type Props = {
  otherfeature: OtherFeature[];
};

export default function OtherFeature({ otherfeature }: Props) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>そのほかの便利な機能</h3>
      <ul className={styles.list}>
        {otherfeature.map((otherfeature) => (
          <li key={otherfeature.id} className={styles.item}>
            <Image
              className={styles.icon}
              src={otherfeature.icon.url}
              alt=""
              width={otherfeature.icon.width}
              height={otherfeature.icon.height}
            />
            <p className={styles.desc}>
              {otherfeature.description.map((desc, index) => (
                <span key={index}>{desc}</span>
              ))}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
