const AppFooter = () => {
  return (
    <footer
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: "10px",
        backgroundColor: "black",
        flexDirection: "column",
 
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img
          src="../../../images/RUGLASS_LOGO_BLACK@10x.png"
          alt="RUGLASS"
          style={{ width: "200px", marginRight: "280x" }}
        />
        <ul style={{ marginLeft: "180px" }}>
          <li style={{ color: "white" }}>Услуги</li>
          <li style={{ color: "white" }}>Фасадные конструкции</li>
          <li style={{ color: "white" }}>Контакты</li>
          <li style={{ color: "white" }}>О нас</li>
        </ul>

        <div
          style={{ display: "flex", alignItems: "center", marginRight: "30px" }}
        >
          <a style={{ color: "white" }}>
            115088, г. Москва, ул. Угрешская, д.2, стр.147
          </a>
          <a style={{ color: "white", marginLeft: "40px" }}>
            + 7 495 787-89-04
          </a>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
