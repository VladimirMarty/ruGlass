import styles from "../Footer5/appFooter5.module.css";
const AppFooter5 = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.bigus}>
        <img
          className={styles.image}
          src="../../../images/logoBlack.png"
          alt="RUGLASS"
        />
        <div className={styles.us}>
          <a className={styles.a}>+ 7 495 787-89-04</a>
          <p className={styles.p1}>info@ruglass.ru</p>
        </div>
      </div>
      <div className={styles.uslugi}>
        <div className={styles.div}>
          <p className={styles.p}>Услуги</p>
          <p className={styles.p}>Фасадные конструкции</p>
          <p className={styles.p}>Контакты</p>
          <p className={styles.p}>О нас</p>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter5;
