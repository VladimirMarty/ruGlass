const AppFooter4 = () => {
  return (
    <footer
      style={{
        backgroundColor: "black",
        color: "white",
 
        padding: "10px",
      }}
    >
      <img
        src="../../../images/logoBlack.png"
        alt="RUGLASS"
        style={{ width: "200px", marginRight: "280x" }}
      />

      <div style={{ display: "flex", flexDirection: "row" }}>
        <p style={{ marginLeft: "10px" }}>УСЛУГИ</p>
        <p style={{ marginLeft: "10px" }}>ФАСАДНЫЕ КОНСТУКЦИИ</p>
        <p style={{ marginLeft: "10px" }}>КОНТАКТЫ</p>
      </div>

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

      <div
        style={{ display: "flex", alignItems: "center", marginRight: "30px" }}
      >
        <a style={{ color: "grey" }}>
          115088, г. Москва, ул. Угрешская, д.2, стр.147
        </a>
        <a style={{ color: "grey", marginLeft: "40px" }}>+ 7 495 787-89-04</a>
      </div>
    </footer>
  );
};

export default AppFooter4;
