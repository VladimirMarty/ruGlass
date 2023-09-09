import styles from "../FasadConstFirstPage/fasadConstFirstPage.module.css";
function FasadConstFirstPage() {
  return (
    <div className={styles.all}>
      <div className={styles.main}>
        <h1 className={styles.main}>Фасадные конcультации</h1>

        <p className={styles.p}>
          Специалисты компании помогут эффективно подобрать тип и размер
          облицовочных материалов и способы их крепления на фасаде. Cоставят
          спецификацию на комплектующие и материалы учитывая специфику и бюджет
          проекта.
        </p>
        <a className={styles.a} onclick="openCity(event)">
          Узнать больше &#10144;
        </a>
      </div>
      <div>
        <img
          className={styles.image}
          src="../../../images/primer.png"
          alt="RUGLASS"
        />
      </div>
    </div>
  );
}

export default FasadConstFirstPage;
