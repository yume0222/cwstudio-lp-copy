import styles from "./index.module.css";

type Props = {
  className1?: string;
  className2?: string;
  children: React.ReactNode;
};

export default function Sheet({ className1, className2, children }: Props) {
  return (
    <div className={className1}>
      <div className={className2}>{children}</div>
    </div>
  );
}
