import AppHeader from "../appHeader";
import Name from "../name.jsx";
import AppFooter from "../appFooter";
import AppFooter2 from "../appFooter2";
import AppFooter3 from "../appFooter3";
import AppFooter4 from "../appFooter4";
import AppFooter5 from "../appFooter5";
import UslugiFirstPage from "../uslugiFirstPage";
import Line from "../line";
import PlusUs from "../plusUs";
import WhyWe from "../whyWe";
import FasadConst from "../fasadConst";
import FasadConstFirstPage from "../fasadConstFirstPage";
import Contacts from "../contacts";
import Uslugi from "../uslugi";
import StanokTEST from "../stanokTEST";
import React from "react";
import styles from "./App.module.css";

function App() {
  return (
  <div className={styles.test}>
      <AppHeader />
      <div>
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
