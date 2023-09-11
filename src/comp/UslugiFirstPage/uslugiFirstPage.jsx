import styles from "../UslugiFirstPage/uslugiFirstPage.module.css";
function UslugiFirstPage() {
  return (
    <div className={styles.all}>
      {" "}
      <h1 className={styles.p1}>Наши Услги</h1>
      <div className={styles.div}>
        {" "}
        <p className={styles.p2}>
          Мы выполним работы по металлообработке любой сложности, сделаем это
          быстро и с высокой точностью, в соответствии с техническим заданием. ‍
          Готовы работать в индивидуальных проектах и специальных условиях.
        </p>
        <a className={styles.a}>
          Подробнее{" "}
          <img
            className={styles.image}
            src="../../../images/5.png"
            alt="RUGLASS"
          />
        </a>{" "}
      </div>
    </div>
  );
}

export default UslugiFirstPage;
