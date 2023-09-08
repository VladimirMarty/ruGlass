const AppFooter3 = () => {
  return (
    <footer>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          paddingBottom: "10px",
          backgroundColor: "black",
          flexDirection: "row",
 
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="../../../images/RUGLASS_LOGO_BLACK@10x.png"
            alt="RUGLASS"
            style={{ width: "200px", marginRight: "280x" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "10px",
            fontSize: "10px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <a style={{ color: "white" }}>Лазерная сварка</a>
            <a style={{ color: "white" }}>TIG сварка</a>
            <a style={{ color: "white" }}>Раскрой заготовки</a>
            <a style={{ color: "white" }}>Прокат профилей</a>
            <a style={{ color: "white" }}>Штамповка металла</a>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "25px",
            }}
          >
            <a style={{ color: "white" }}>Порошковая покраска</a>
            <a style={{ color: "white" }}>Конденсаторная сварка</a>
            <a style={{ color: "white" }}>Сверление отверстий</a>
            <a style={{ color: "white" }}>Лазерная резка</a>
            <a style={{ color: "white" }}>Раскрой профиля</a>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "25px",
            }}
          >
            <a style={{ color: "white" }}>Рубка металла</a>
            <a style={{ color: "white" }}>Газопламенная покраска</a>
            <a style={{ color: "white" }}>Электродуговая сварка</a>
            <a style={{ color: "white" }}>Фрезеровка металла</a>
            <a style={{ color: "white" }}>Перфорация металла</a>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "25px",
            }}
          >
            <a style={{ color: "white" }}>Плазменная резка</a>
            <a style={{ color: "white" }}>Гибка металла</a>
            <a style={{ color: "white" }}>Лазерная очистка</a>
            <a style={{ color: "white" }}>Точечная сварка</a>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "25px",
            }}
          >
            <a
              style={{
                color: "white",
                marginLeft: "40px",
                marginTop: "50px",
                fontSize: "15px",
              }}
            >
              + 7 495 787-89-04
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter3;
