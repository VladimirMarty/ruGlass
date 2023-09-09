
import styles from'../Header/appHeader.module.css'
const AppHeader = () => {
  return (
    <header className={styles.header}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

      }}
    >
      <img className={styles.image}
        src="../../../images/logo.png"
        alt="RUGLASS"
       
      />
      <a>+ 7 495 787-89-04</a>
    </header>
  );
};

export default AppHeader;
