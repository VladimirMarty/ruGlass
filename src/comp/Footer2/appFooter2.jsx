const AppFooter2 = () => {
  return (
    <footer
      style={{
        padding: "10px",
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
        <img
          src="../../../images/logoBlack.png"
          alt="RUGLASS"
          style={{ width: "200px", marginRight: "280x" }}
        />

        <a style={{ color: "white", marginLeft: "40px" }}>+ 7 495 787-89-04</a>
      </div>
    </footer>
  );
};

export default AppFooter2;
