

const AppHeader = () => {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        // marginLeft: " 100px",
    //          border: "1px solid #ddc4c4",
    // borderColor: "black",
    // borderBottom:'none'
      }}
    >
      <img
        src="../../../images/logo.png"
        alt="RUGLASS"
        style={{ width: "200px" }}
      />
      <a>+ 7 495 787-89-04</a>
    </header>
  );
};

export default AppHeader;
