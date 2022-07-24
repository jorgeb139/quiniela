import styles from "../../styles/Global.module.css";

export default function Footer({ userName }) {
  return (
    <>
      <div className={styles.footer}>
        Desarrollador por: Jorge Burguera y Raul Febres -{" "}
        {new Date().getFullYear()}
      </div>
    </>
  );
}
