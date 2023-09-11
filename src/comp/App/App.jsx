import "./App.module.css";
import AppHeader from "../Header/appHeader";
import Name from "../Name/name.jsx";
import AppFooter from "../Footer/appFooter";
import AppFooter2 from "../Footer2/appFooter2";
import AppFooter3 from "../Footer3/appFooter3";
import AppFooter4 from "../Footer4/appFooter4";
import AppFooter5 from "../Footer5/appFooter5";
import UslugiFirstPage from "../UslugiFirstPage/uslugiFirstPage";
import Line from "../Line/line";
import PlusUs from "../PlusUs/plusUs";
import WhyWe from "../WhyWe/whyWe";
import FasadConst from "../FasadConst/fasadConst";
import FasadConstFirstPage from "../FasadConstFirstPage/fasadConstFirstPage";
import Contacts from "../Contacts/contacts";
import Uslugi from "../Uslugi/uslugi";
import StanokTEST from "../StanokTEST/stanokTEST";
import styles from "../App/App.module.css"

function App() {
  return (
    <div
    className={styles.test}
      // style={{
      //   width: "1073px",
      // }}
    >
      <AppHeader />
      <div   className={styles.div}>
        <Name />
        <UslugiFirstPage />
        <Line />
        <FasadConstFirstPage />
        <WhyWe />
        <FasadConst />
        <Contacts />
        <PlusUs />
        <Uslugi />
        <StanokTEST />
      </div>
      <AppFooter5 />
    </div>
  );
}

export default App;
