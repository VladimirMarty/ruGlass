import FasadConstProps from "./fasadConstProps";
import { objects } from "../utils/dataObjects";
import AppFooter4 from "./appFooter4";
import AppFooter3 from "./appFooter3";
import AppFooter2 from "./appFooter2";
import AppFooter from "./appFooter";
import AppFooter5 from "./appFooter5";
const FasadConst = () => {
  const fasad = objects;
  return (
    <div     style={{
      height: "100%",
      border: "2px solid black",
      margin: "30px",
      padding:'30px'
    }}>
      <div
        style={{
          height: "100%",
          border: "2px solid black",
          // margin: "30px",
        }}
      >
        <img
          src="../../../images/cover.png"
          alt="RUGLASS"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
        <div>Ruglass  /  фасадные консультации</div>
        <h1
          style={{
            fontSize: "70px",
            margin: "0",
          }}
        >
          Фасадные консультации
        </h1>
        <div class="about_block about_block_facades">
          <div>
            <div>
              Проектируем фасады, помогаем рассчитать стоимость и применить
              материалы по требованиям объекта.
            </div>
          </div>
          <a href="contacts.html">
            <div>Связаться с нами</div>
            <div></div>
          </a>
        </div>
      </div>

      <div
        style={{
          height: "100%",
          border: "2px solid black",
          // margin: "30px",
        }}
      >
        <div>
          <div>
            <h1>Мы предлагаем</h1>
          </div>
          <div style={{ display: "flex" }}>
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

      <div
        style={{
          height: "100%",
          border: "2px solid black",
          // margin: "30px",
        }}
      >
        <h1>Почему стоит выбрать нас</h1>

        <p>
          В год нашей командой выполняется от 100 000м<sup>2 ‍</sup>проектов
          по НВФ и СПК.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",

            alignItems: "center",
          }}
        >
          <div>
            <img
              src="../../../images/pochemu/1.png"
              alt="RUGLASS"
              style={{ width: "100px", height: "100px" }}
            />
            <p>
              Сэкономим деньги заказчика путем точных спецификаций и понятных
              решений, без потери качества фасада.
            </p>
          </div>
          <div>
            <img
              src="../../../images/pochemu/1.png"
              alt="RUGLASS"
              style={{ width: "100px", height: "100px" }}
            />
            <p>
              Разрабатываем новые варианты системы, комбинируем решения, где
              невозможно обойтись стандартом.
            </p>
          </div>
          <div>
            <img
              src="../../../images/pochemu/1.png"
              alt="RUGLASS"
              style={{ width: "100px", height: "100px" }}
            />
            <p>
              Консультируем проектные бюро на этапе разработки проектной
              документации.
            </p>
          </div>
          <div>
            <img
              src="../../../images/pochemu/1.png"
              alt="RUGLASS"
              style={{ width: "100px", height: "100px" }}
            />
            <p>
              Работаем над сложными объектами и имеем опыт реализации самых
              смелых идей архитекторов и заказчиков.
            </p>
          </div>
        </div>
      </div>

      <div         style={{
          height: "100%",
          border: "2px solid black",
          // margin: "30px",
        }}>
        <div>
          <h1>Объекты</h1>
        </div>
        {fasad.map((item) => (
          <FasadConstProps item={item} />
        ))}
      </div>
      <AppFooter5/>
      {/* <div
        style={{
          height: "100%",
          border: "2px solid black",
          margin: "30px",
        }}
      >
        <div>
          <div>
            <h1>Объекты</h1>
          </div>
          <div>
            <div>
              {" "}
              <img
                src="../../../images/primer.png"
                alt="RUGLASS"
                style={{ width: "400px" }}
              />
              <div>
                <div>ЖК Will Towers</div>
                <div>
                  <div>
                    <div>Система</div>
                    <div>KAFT</div>
                  </div>
                  <div>
                    <div>Заказчик</div>
                    <div>Центр-инвест</div>
                  </div>
                  <div>
                    <div>Подрядчик</div>
                    <div>АННТЕК</div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <div>Вид работ</div>
                    <div>Навесной вентилируемый фасад</div>
                  </div>
                  <div>
                    <div>облицовка</div>
                    <div>
                      Клинкерная плитка с затиркой швов, кассеты, камень
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <div>
                      45 000м<sup>2</sup>
                    </div>
                    <div>площадь</div>
                  </div>
                  <div>
                    <div>200м</div>
                    <div>высотность</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <img
                src="../../../images/primer.png"
                alt="RUGLASS"
                style={{ width: "400px" }}
              />
              <div>
                <div>ЖК Кутузовград 2</div>
                <div>
                  <div>
                    <div>Система</div>
                    <div>KAFT</div>
                  </div>
                  <div>
                    <div>Заказчик</div>
                    <div>Инград</div>
                  </div>
                  <div>
                    <div>Подрядчик</div>
                    <div>ООО ИКФ</div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <div>Вид работ</div>
                    <div>Навесной вентилируемый фасад</div>
                  </div>
                  <div>
                    <div>облицовка</div>
                    <div>Клинкерная плитка с затиркой швов, керамогранит</div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <div>
                      50 000м<sup>2</sup>
                    </div>
                    <div>площадь</div>
                  </div>
                  <div>
                    <div>100м</div>
                    <div>высотность</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <img
                src="../../../images/primer.png"
                alt="RUGLASS"
                style={{ width: "400px" }}
              />
              <div>
                <div>ЖК Сердце</div>
                <div>
                  <div>
                    <div>Система</div>
                    <div>РОНСОН, ALUCOM</div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <div>Вид работ</div>
                    <div>Скрытое крепление керамогранита,остекление</div>
                  </div>
                  <div>
                    <div>облицовка</div>
                    <div>Керамогранит, композит, СФБ, натуральный камень</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <img
                src="../../../images/primer.png"
                alt="RUGLASS"
                style={{ width: "400px" }}
              />
              <div>
                <div>ЖК Эвер</div>
                <div>
                  <div>
                    <div>Система</div>
                    <div>KAFT</div>
                  </div>
                  <div>
                    <div>Заказчик</div>
                    <div>Tekta Group</div>
                  </div>
                  <div>
                    <div>Подрядчик</div>
                    <div>АНТ ЯПЫ</div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <div>Вид работ</div>
                    <div>Навесной вентилируемый фасад</div>
                  </div>
                  <div>
                    <div>облицовка</div>
                    <div>
                      Бетонная плитка с затиркой швов, композитные кассеты,
                      пиленный кирпич, фиброцементные плиты
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <div>
                      50 000м<sup>2</sup>
                    </div>
                    <div>площадь</div>
                  </div>
                  <div>
                    <div>120м</div>
                    <div>высотность</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <img
                src="../../../images/primer.png"
                alt="RUGLASS"
                style={{ width: "400px" }}
              />
              <div>
                <div>Ст. метро Саларьево</div>
                <div>
                  <div>
                    <div>Система</div>
                    <div>ALUCOM</div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <div>Вид работ</div>
                    <div>Облицовка </div>
                  </div>
                  <div>
                    <div>облицовка</div>
                    <div>Композитные панели (глянец)</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <img
                src="../../../images/primer.png"
                alt="RUGLASS"
                style={{ width: "400px" }}
              />
              <div>
                <div>ЖК Домашний</div>
                <div>
                  <div>
                    <div>Система</div>
                    <div>РОНСОН</div>
                  </div>
                </div>
              </div>
              <div>
                <div class="facade_object-props_secondary">
                  <div class="facade_object-prop">
                    <div>Вид работ</div>
                    <div>Облицовка </div>
                  </div>
                  <div>
                    <div>облицовка</div>
                    <div>Бетонная плитка White Hills без затирки</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <img
                src="../../../images/primer.png"
                alt="RUGLASS"
                style={{ width: "400px" }}
              />
              <div>
                <div>ЖК LIFE Варшавская</div>
                <div>
                  <div>
                    <div>Система</div>
                    <div>KAFT</div>
                  </div>
                  <div>
                    <div>Заказчик</div>
                    <div>Пионер</div>
                  </div>
                  <div>
                    <div>Подрядчик</div>
                    <div>ООО СМУ-7</div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <div>Вид работ</div>
                    <div>Навесной вентилируемый фасад</div>
                  </div>
                  <div>
                    <div>облицовка</div>
                    <div>Керамогранит, металлокассеты</div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <div>
                      20 000м<sup>2</sup>
                    </div>
                    <div>площадь</div>
                  </div>
                  <div>
                    <div>100м</div>
                    <div>высотность</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <img
                src="../../../images/primer.png"
                alt="RUGLASS"
                style={{ width: "400px" }}
              />
              <div>
                <div>Школа ЗИЛ</div>
                <div>
                  <div>
                    <div>Система</div>
                    <div>INICIAL</div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <div>Вид работ</div>
                    <div>Проектирование остекления</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <img
                src="../../../images/primer.png"
                alt="RUGLASS"
                style={{ width: "400px" }}
              />
              <div>
                <div>Стадион Динамо</div>
                <div>
                  <div>
                    <div>Система</div>
                    <div>Реалит, Титан</div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <div>Вид работ</div>
                    <div>Проектирование остекления</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <img
                src="../../../images/primer.png"
                alt="RUGLASS"
                style={{ width: "400px" }}
              />
              <div>
                <div>ЖК Сказочный лес К1 и К4</div>
                <div>
                  <div>
                    <div>Система</div>
                    <div>KAFT</div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <div>Вид работ</div>
                    <div>Облицовка</div>
                  </div>
                  <div>
                    <div>облицовка</div>
                    <div>Композитные кассеты</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <img
                src="../../../images/primer.png"
                alt="RUGLASS"
                style={{ width: "400px" }}
              />
              <div>
                <div>ЖК Фонтаны Лит. 12</div>
                <div>
                  <div>
                    <div>Система</div>
                    <div></div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <div>Вид работ</div>
                    <div>Облицовка</div>
                  </div>
                  <div>
                    <div>облицовка</div>
                    <div>Керамогранит на открытом креплении</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <img
                src="../../../images/primer.png"
                alt="RUGLASS"
                style={{ width: "400px" }}
              />
              <div>
                <div>ТПУ Ходынское поле</div>
                <div>
                  <div>
                    <div>Система</div>
                    <div>Реалит</div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <div>Вид работ</div>
                    <div>Псевдоструктурное остекление</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <img
                src="../../../images/primer.png"
                alt="RUGLASS"
                style={{ width: "400px" }}
              />
              <div>
                <div>ЖК Филатов Луг</div>
                <div>
                  <div>
                    <div>Система</div>
                    <div>Hilti</div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <div>Вид работ</div>
                    <div>Облицовка</div>
                  </div>
                  <div>
                    <div>облицовка</div>
                    <div>Керамогранит на открытом креплении</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <img
                src="../../../images/primer.png"
                alt="RUGLASS"
                style={{ width: "400px" }}
              />
              <div>
                <div>ЖК Лиговский</div>
                <div>
                  <div>
                    <div>Система</div>
                    <div>Hilti</div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <div>Вид работ</div>
                    <div>Облицовка</div>
                  </div>
                  <div>
                    <div>облицовка</div>
                    <div>Натуральный камень</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default FasadConst;
