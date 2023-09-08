function Tabs(props) {
  return (
    <div
      style={{
        maxWidth: "1140px",
        border: "2px solid black",
        height: "100px",
        display: "flex",
        justifyContent: "space-around",
      
      }}
    >
      <button
        style={{
          overflow: "hidden",
          fontSize: "40px",
          display: "inline-block",
          flex: "auto",
        }}
        onclick="openCity(event)"
      >
        Услуги
      </button>
      <button
        style={{
          overflow: "hidden",
          fontSize: "40px",
          display: "inline-block",
          flex: "auto",
        }}
        onclick="openCity(event)"
      >
        Фасадные конструкции
      </button>
      <button
        style={{
          overflow: "hidden",
          fontSize: "40px",
          display: "inline-block",
          flex: "auto",
        }}
        onclick="openCity(event)"
      >
        {" "}
        Контакты
      </button>
    </div>
  );
}

export default Tabs;
