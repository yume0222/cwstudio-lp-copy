import FeatureCard from "../FeatureCard";
import OtherFeatureCard from "../OtherFeatureCard";
import Sheet from "../Sheet";
import SheetStyles from "../Sheet/index.module.css";
import Title from "../Title";
import styles from "./index.module.css";
import { Feature, OtherFeature } from "@/app/_libs/microcms";

const feature: {
  contents: Feature[];
} = {
  contents: [
    {
      id: "1",
      title: "本編の執筆",
      description:
        "本編の執筆ができます。フルスクリーンモードで執筆に集中することが出来ます。",
      image: {
        url: "/pic-top-function.png",
        width: 1200,
        height: 600,
      },
    },
    {
      id: "2",
      title: "物語の設定",
      description:
        "テーマ/世界観/時代設定/物語のゴール/など、自由に物語の設定を登録できます。",
      image: {
        url: "/pic-top-function.png",
        width: 1200,
        height: 600,
      },
    },
    {
      id: "3",
      title: "プロット作成",
      description:
        "起承転結/三幕構成/序破急/など、自由に項目を設定してプロットを作ることが出来ます。",
      image: {
        url: "/pic-top-function.png",
        width: 1200,
        height: 600,
      },
    },
    {
      id: "4",
      title: "人物設定",
      description: "登場人物のキャラクター設定を自由に登録できます。",
      image: {
        url: "/pic-top-function.png",
        width: 1200,
        height: 600,
      },
    },
    {
      id: "5",
      title: "時系列整理",
      description: "物語の時系列を自由に登録できます。",
      image: {
        url: "/pic-top-function.png",
        width: 1200,
        height: 600,
      },
    },
    {
      id: "6",
      title: "用語集設定",
      description: "小説に使用する用語とその定義を自由に登録できます。",
      image: {
        url: "/pic-top-function.png",
        width: 1200,
        height: 600,
      },
    },
    {
      id: "7",
      title: "バージョン管理",
      description: "過去の執筆状態を確認することや戻すことが可能です。",
      image: {
        url: "/pic-top-function.png",
        width: 1200,
        height: 600,
      },
    },
    {
      id: "8",
      title: "バックアップ",
      description:
        "執筆した文章はもちろん、物語の設定やプロットもテキストデータでバックアップを取ることが可能です。",
      image: {
        url: "/pic-top-function.png",
        width: 1200,
        height: 600,
      },
    },
    {
      id: "9",
      title: "不必要な機能は非表示",
      description:
        "機能のオンオフは自由に設定できます。不必要で邪魔な機能がメニューに表示されることはありません。",
      image: {
        url: "/pic-top-function.png",
        width: 1200,
        height: 600,
      },
    },
  ],
};

const otherfeature: {
  contents: OtherFeature[];
} = {
  contents: [
    {
      id: "1",
      description: ["長時間の執筆のために", "ダークモード掲載"],
      icon: {
        url: "/icon-dark-mode.svg",
        width: 63,
        height: 63,
      },
    },
    {
      id: "2",
      description: ["縦書きレビュー可能"],
      icon: {
        url: "/icon-preview.svg",
        width: 63,
        height: 63,
      },
    },
    {
      id: "3",
      description: ["各項目は自由に", "並び替えが変更可能"],
      icon: {
        url: "/icon-sort.svg",
        width: 63,
        height: 63,
      },
    },
    {
      id: "4",
      description: ["スマホでも執筆可能"],
      icon: {
        url: "/icon-phone.svg",
        width: 63,
        height: 63,
      },
    },
  ],
};

export default function FeatureSection() {
  return (
    <Sheet
      className1={`${SheetStyles.ptb} ${styles.bg}`}
      className2={SheetStyles.container}
    >
      <Title>9つの機能・特徴</Title>
      <div className={styles.body}>
        <FeatureCard feature={feature.contents} />
        <OtherFeatureCard otherfeature={otherfeature.contents} />
      </div>
    </Sheet>
  );
}
