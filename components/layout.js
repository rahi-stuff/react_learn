import styles from "./layout.module.css";

export default function Layout({ children }) {
  console.log("Printing childrens:   ");
  console.log(children);
  return <div className={styles.container}>{children}</div>;
}
