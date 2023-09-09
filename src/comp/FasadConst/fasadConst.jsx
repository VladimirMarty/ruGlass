import FasadConstProps from "../FasadConstProps/fasadConstProps";
import { objects } from "../../utils/dataObjects";
import AppFooter4 from "../Footer4/appFooter4";
import AppFooter3 from "../Footer3/appFooter3";
import AppFooter2 from "../Footer2/appFooter2";
import AppFooter from "../Footer/appFooter";
import AppFooter5 from "../Footer5/appFooter5";
import styles from "../FasadConst/fasadConst.module.css";
const FasadConst = () => {
  const fasad = objects;
  return (
    <div className={styles.all}>
      <div className={styles.first}>
        <img
          src="../../../images/cover.png"
          alt="RUGLASS"
          className={styles.image}
        />
        <div>Ruglass  /  фасадные консультации</div>
        <h1
          className={styles.h1}
          style={{
            fontSize: "70px",
            margin: "0",
          }}
        >
          Фасадные консультации
        </h1>
        <div>
          <div>
            <div>
              Проектируем фасады, помогаем рассчитать стоимость и применить
              материалы по требованиям объекта.
            </div>
          </div>
          <a>
            <div>Связаться с нами</div>
            <div></div>
          </a>
        </div>
      </div>

      <div className={styles.second}>
        <div>
          <div>
            <h2>Мы предлагаем</h2>
          </div>
          <div className={styles.ulli}>
            <ul>
              <li>Фасадная съемка 2Д и 3Д</li>

              <li> Проекты по светопрозрачным конструкциям</li>

              <li> Разработка ППР для монтажных организаций</li>

              <li> Консультирование на этапе разработки ПД</li>
            </ul>
            <ul>
              <li> Помощь в выборе производителей и анализ их документации</li>

              <li> Проверка на правильность выдачи КП от участников тендера</li>

              <li> Проекты по навесным фасадам</li>
              <li>Авторский надзор</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.third}>
        <h1>Почему стоит выбрать нас</h1>

        <p>
          В год нашей командой выполняется от 100 000м<sup>2 ‍</sup>проектов
          по НВФ и СПК.
        </p>

        <div className={styles.third2}>
          <div>
            <img
              className={styles.thirdImage}
              src="../../../images/pochemu/1.png"
              alt="RUGLASS"
            />
            <p>
              Сэкономим деньги заказчика путем точных спецификаций и понятных
              решений, без потери качества фасада.
            </p>
          </div>
          <div>
            <img
              className={styles.thirdImage}
              src="../../../images/pochemu/1.png"
              alt="RUGLASS"
            />
            <p>
              Разрабатываем новые варианты системы, комбинируем решения, где
              невозможно обойтись стандартом.
            </p>
          </div>
          <div>
            <img
              className={styles.thirdImage}
              src="../../../images/pochemu/1.png"
              alt="RUGLASS"
            />
            <p>
              Консультируем проектные бюро на этапе разработки проектной
              документации.
            </p>
          </div>
          <div>
            <img
              className={styles.thirdImage}
              src="../../../images/pochemu/1.png"
              alt="RUGLASS"
            />
            <p>
              Работаем над сложными объектами и имеем опыт реализации самых
              смелых идей архитекторов и заказчиков.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.four}>
        <div>
          <h1>Объекты</h1>
        </div>
        {fasad.map((item) => (
          <FasadConstProps item={item} />
        ))}
      </div>
      <AppFooter5 />
    </div>
  );
};

export default FasadConst;
