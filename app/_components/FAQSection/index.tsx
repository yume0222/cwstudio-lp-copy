import FAQItem from "../FAQItem";
import Sheet from "../Sheet";
import SheetStyles from "../Sheet/index.module.css";
import Title from "../Title";
import styles from "./index.module.css";
import { FAQ } from "@/app/_libs/microcms";

const data: {
  contents: FAQ[];
} = {
  contents: [
    {
      question: "支払い手段を教えてください。",
      answer: [
        {
          type: "text",
          value:
            "支払いはクレジットカード払いのみになります。対応カードは下記になります。",
        },
        {
          type: "text",
          value:
            "VISA / Master Card / JCB / American Express / Discover / Diners",
        },
      ],
    },
    {
      question:
        "有料プランから無料プランに変更したらデータは消えてしまいますか？",
      answer: [
        {
          type: "text",
          value:
            "無料プランは作成できる小説の数は1つとなります。有料プランで2つ以上作成している場合は、プラン変更時に残す小説を1つ選択することになります。それ以外は消えてしまうので、変更前にバックアップでデータをご自身のPCに保存しておくことをおすすめします。",
        },
      ],
    },
    {
      question: "操作は難しくないですか？",
      answer: [
        { type: "text", value: "直感的に操作できるようになっています。" },
        { type: "link", value: "使い方ガイド", href: "#" },
        {
          type: "text",
          value: "もあるので、安心して使っていただけると思います。",
        },
      ],
    },
    {
      question: "領収書は発行できますか？",
      answer: [{ type: "text", value: "管理画面からpdfで発行が可能です。" }],
    },
    {
      question: "見た目を確認できますか？",
      answer: [
        { type: "text", value: "デモページをご用意しているので、" },
        { type: "link", value: "こちら", href: "#" },
        {
          type: "text",
          value:
            "からご覧ください。本編の執筆は無料プランでも可能なので、まずは無料プランで使っていただく事もできます。",
        },
      ],
    },
    {
      question: "動作環境を教えてください。",
      answer: [
        { type: "text", value: "下記の環境でお使いいただけます。" },
        {
          type: "text",
          value: "PC：Google Chrome / Safari / FireFox / Edge / 各最新版",
        },
        {
          type: "text",
          value: "スマートフォン：iOS Safari / Android Chrome / 各最新版",
        },
      ],
    },
  ],
};

export default function FAQSection() {
  return (
    <Sheet
      className1={`${SheetStyles.ptb} ${styles.bg}`}
      className2={SheetStyles.containerSmall}
    >
      <Title>よくあるご質問</Title>
      <div className={styles.body}>
        <FAQItem faq={data.contents} />
      </div>
    </Sheet>
  );
}
