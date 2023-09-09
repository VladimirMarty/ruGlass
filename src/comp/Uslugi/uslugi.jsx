import UslugiProps from "../UslugiProps/uslugiProps";
import { stanki } from "../../utils/dataStanki";
import WhyWe from "../WhyWe/whyWe";
import AppFooter4 from "../Footer4/appFooter4";
import styles from "../Uslugi/uslugi.module.css";
import AppFooter5 from "../Footer5/appFooter5";
const Uslugi = () => {
  const stan = stanki;
  return (
    <div className={styles.all}>
      <div>Ruglass  /  Наши услуги</div>
      <h1>Наши услуги</h1>
      <div className={styles.allUslugi}>
        <div className={styles.div}>
          <a className={styles.a}>Лазерная сварка</a>
          <a className={styles.a}>TIG сварка</a>
          <a className={styles.a}>Раскрой заготовки</a>
          <a className={styles.a}>Прокат профилей</a>
        </div>
        <div className={styles.div}>
          <a className={styles.a}>Порошковая покраска</a>
          <a className={styles.a}>Конденсаторная сварка</a>
          <a className={styles.a}>Сверление отверстий</a>
          <a className={styles.a}>Лазерная резка</a>
        </div>
        <div className={styles.div}>
          <a className={styles.a}>Рубка металла</a>
          <a className={styles.a}>Газопламенная покраска</a>
          <a className={styles.a}>Электродуговая сварка</a>
          <a className={styles.a}>Фрезеровка металла</a>
        </div>
        <div className={styles.div}>
          <a className={styles.a}>Плазменная резка</a>
          <a className={styles.a}>Гибка металла</a>
          <a className={styles.a}>Лазерная очистка</a>
          <a className={styles.a}>Точечная сварка</a>
        </div>
        <div className={styles.div}>
          <a className={styles.a}>Раскрой профиля</a>
          <a className={styles.a}>Перфорация металла</a>
          <a className={styles.a}>Штамповка металла</a>
        </div>
      </div>

      <div>
        <div>
          <h1>Объекты</h1>
        </div>
        <div className={styles.props}>
          {stan.map((item) => (
            <UslugiProps item={item} />
          ))}
        </div>
      </div>
      <WhyWe />
      <button>Связатся с нами</button>
      <AppFooter5 />
    </div>
  );
};

export default Uslugi;
