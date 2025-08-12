import PlanCard from "../PlanCard";
import Sheet from "../Sheet";
import SheetStyles from "../Sheet/index.module.css";
import Title from "../Title";
import styles from "./index.module.css";
import { Plan } from "@/app/_libs/microcms";

const data: {
  contents: Plan[];
} = {
  contents: [
    {
      id: "1",
      title: "無料プラン",
      priceTitle: "月額使用料",
      price: 0,
      functionTitle: "主な機能",
      functions: ["作成できる小説の数は1つ", "本編の執筆"],
      isPaid: false,
    },
    {
      id: "2",
      title: "有料プラン",
      priceTitle: "月額使用料",
      price: 500,
      functionTitle: "主な機能",
      functions: [
        "作成できる小説の数は無制限",
        "本編の執筆",
        "物語の設定",
        "プロット",
        "人物",
        "時系列",
        "その他全ての機能",
      ],
      isPaid: true,
    },
  ],
};

export default function PlanSection() {
  return (
    <Sheet className1={SheetStyles.ptb} className2={SheetStyles.containerSmall}>
      <Title>プラン・料金</Title>
      <div className={styles.body}>
        <PlanCard plan={data.contents} />
      </div>
    </Sheet>
  );
}
