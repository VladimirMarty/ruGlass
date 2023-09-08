
const AppFooter5 = () => {
  return (
    <footer
      style={{
        padding: "30px",
        width: "955",
        backgroundColor: "black",
        flexDirection: "column",


      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-star",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <img
            src="../../../images/logoBlack.png"
            alt="RUGLASS"
            style={{ width: "500px", marginRight: "280x" }}
          />
          <div
            style={{
              display: "flex",
              alignItems: "flex-star",
              flexDirection: "row",
              width: "500px",
              alignItems: "center",
            }}
          >
            <a style={{ color: "grey", marginLeft: "40px" }}>
              + 7 495 787-89-04
            </a>
            <p style={{ color: "grey", marginLeft: "40px" }}>info@ruglass.ru</p>
          </div>
        </div>
        <div style={{
          height:'134px', 
            }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-star",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <p style={{ color: "white", margin: "0" }}>Услуги</p>
            <p style={{ color: "white", margin: "0" }}>Фасадные конструкции</p>
            <p style={{ color: "white", margin: "0" }}>Контакты</p>
            <p style={{ color: "white", margin: "0" }}>О нас</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter5;
