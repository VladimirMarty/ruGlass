import FullWidthTabs from "./Tabs";
import Tabs from "./Tabs";
import PlusUs from "./plusUs";
import FasadConst from "./fasadConst";
import WhyWe from "./whyWe";
import Line from "./line";
import UslugiFirstPage from "./uslugiFirstPage";
import FasadConstFirstPage from "./fasadConstFirstPage";
const Name = () => {
  return (
    <div
  
    >
      <div style={{ margin: "30px" }}>
        <div style={{ border: "2px solid black" }}>
          <h2
            style={{
              fontSize: "131px",
              marginLeft: "22px",
              marginTop: "0px",
              marginBottom: "0px",
            }}
          >
            {" "}
            RUGLASS
          </h2>
          <h2
            style={{
              fontSize: "131px",
              margin: "0",
              marginTop: "-60px",
              marginLeft: "22px",
              width: "925px",
            }}
          >
            PRODUCTION
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            border: "2px solid black",

            borderTop: "none",
            borderBottom: "none",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",

              // paddingBottom: "10px",
              // width: "900px",
              // margin: " 35px",
            }}
          >
            <p
              style={{
                // width: "700px",
                fontSize: " 25px",
                margin: "0",
                backgroundColor: "black",
                fontColor: "white",
                color: "white",
                padding: "20px",
              }}
            >
              Реализуем полный цикл поддержки своих клиентов: от проектирования
              конкретного изделия и разработки технического задания до
              реализации сопутствующих услуг. Подробнее &#10144;
            </p>
          </div>
        </div>
        <Tabs></Tabs>
      </div>

      {/*     
      <UslugiFirstPage></UslugiFirstPage>
      <Line></Line>
      <PlusUs></PlusUs>
      <FasadConstFirstPage></FasadConstFirstPage>
      
      <WhyWe></WhyWe>

      <FasadConst></FasadConst> */}
    </div>
  );
};

export default Name;
