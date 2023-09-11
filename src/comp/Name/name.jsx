import FullWidthTabs from "../Tabs/Tabs";
import Tabs from "../Tabs/Tabs";
import PlusUs from "../PlusUs/plusUs";
import FasadConst from "../FasadConst/fasadConst";
import WhyWe from "../WhyWe/whyWe";
import Line from "../Line/line";
import UslugiFirstPage from "../UslugiFirstPage/uslugiFirstPage";
import FasadConstFirstPage from "../FasadConstFirstPage/fasadConstFirstPage";
import styles from "../Name/name.module.css";
const Name = () => {
  return (
    <div className={styles.all}>
      <div
      className={styles.name}>
        <h2
          className={styles.start}
      
        >
          {" "}
          RUGLASS
        </h2>
        <h2
          className={styles.end}
    
        >
          PRODUCTION
        </h2>
      </div>

     
          <a
            className={styles.a}
         
          >
            Реализуем полный цикл поддержки своих клиентов: от проектирования
            конкретного изделия и разработки технического задания до реализации
            сопутствующих услуг. 
           <p className={styles.p}> Подробнее <img 
           className={styles.image}
           src="../../../images/5.png"
           alt="RUGLASS"/></p>
          </a>
       
     
      <Tabs></Tabs>
    </div>
  );
};

export default Name;
