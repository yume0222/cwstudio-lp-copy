import Image from "next/image";
import styles from "./index.module.css";
import { Feature } from "@/app/_libs/microcms";

type Props = {
  feature: Feature[];
};

export default function FeatureCard({ feature }: Props) {
  return (
    <ul className={styles.list}>
      {feature.map((feature) => (
        <li key={feature.id} className={styles.item}>
          <div className={styles.image}>
            <Image
              src={feature.image.url}
              alt=""
              width={feature.image.width}
              height={feature.image.height}
            />
          </div>
          <div className={styles.body}>
            <span className={styles.num}>POINT 0{feature.id}</span>
            <h3 className={styles.title}>{feature.title}</h3>
            <p className={styles.desc}>{feature.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
