import UslugiProps from "./uslugiProps";
import { stanki } from "../utils/dataStanki";
import WhyWe from "./whyWe";
import AppFooter4 from "./appFooter4";

const Uslugi = () => {
    const stan = stanki
    return (
    
        <div
          style={{
            height: "100%",
            border: "2px solid black",
            margin: "30px",
            padding:'30px'
          }}
        >
          <div>Ruglass  /  Наши услуги</div>
          <h1>Наши услуги</h1>
          <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "10px",
          fontSize: "15px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <a style={{ color: "grey" }}>Лазерная сварка</a>
          <a style={{ color: "grey" }}>TIG сварка</a>
          <a style={{ color: "grey" }}>Раскрой заготовки</a>
          <a style={{ color: "grey" }}>Прокат профилей</a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "25px",
          }}
        >
          <a style={{ color: "grey" }}>Порошковая покраска</a>
          <a style={{ color: "grey" }}>Конденсаторная сварка</a>
          <a style={{ color: "grey" }}>Сверление отверстий</a>
          <a style={{ color: "grey" }}>Лазерная резка</a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "25px",
          }}
        >
          <a style={{ color: "grey" }}>Рубка металла</a>
          <a style={{ color: "grey" }}>Газопламенная покраска</a>
          <a style={{ color: "grey" }}>Электродуговая сварка</a>
          <a style={{ color: "grey" }}>Фрезеровка металла</a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "25px",
          }}
        >
          <a style={{ color: "grey" }}>Плазменная резка</a>
          <a style={{ color: "grey" }}>Гибка металла</a>
          <a style={{ color: "grey" }}>Лазерная очистка</a>
          <a style={{ color: "grey" }}>Точечная сварка</a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "25px",
          }}
        >
          <a style={{ color: "grey" }}>Раскрой профиля</a>
          <a style={{ color: "grey" }}>Перфорация металла</a>
          <a style={{ color: "grey" }}>Штамповка металла</a>
        </div>
      </div>
  
    
  
        <div>
          <div>
            <h1>Объекты</h1>
          </div>
          <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr'
          }}>
          {stan.map((item) => (
            <UslugiProps item={item} />
          ))}
          </div>
        </div>
        <WhyWe
      
        />
        <button>Связатся с нами</button>
        <AppFooter4/>
        </div>
       
        );
};

export default Uslugi;