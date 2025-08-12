import Title from "../Title";
import styles from "./index.module.css";
import Sheet from "../Sheet";
import SheetStyles from "../Sheet/index.module.css";

export default function MovieSection() {
  return (
    <>
      <Sheet
        className1={SheetStyles.ptb}
        className2={SheetStyles.containerSmall}
      >
        <Title>動画でわかるCWstudio</Title>
        <div className={styles.body}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qVwsXaYYbrg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Sheet>
    </>
  );
}
