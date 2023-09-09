import styles from "../Footer/appFooter.module.css";
const AppFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.all}>
        <img
          className={styles.image}
          src="../../../images/RUGLASS_LOGO_BLACK@10x.png"
          alt="RUGLASS"
        />
        <ul className={styles.ul}>
          <li className={styles.li}>Услуги</li>
          <li className={styles.li}>Фасадные конструкции</li>
          <li className={styles.li}>Контакты</li>
          <li className={styles.li}>О нас</li>
        </ul>

        <div className={styles.adress}>
          <a className={styles.a1}>
            115088, г. Москва, ул. Угрешская, д.2, стр.147
          </a>
          <a className={styles.a2}>+ 7 495 787-89-04</a>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
