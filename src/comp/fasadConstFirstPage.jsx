function FasadConstFirstPage() {
    return (
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          margin: "30px",
          backgroundColor: "#7777773b",
          border: "2px solid black",
        }}
      >
      
        <div
          style={{
            display: "flex",
            marginLeft: "31px",
            flexDirection: "column",
            width: "420px",
          }}
        >
          <p
            style={{
              fontSize: "40px",
              width: "1000px",
              marginBottom: "20px",
            }}
          >
            Фасадные конcультации
          </p>

          <p
            style={{
              fontSize: "20px",
              marginLeft: "150px",
              margin: "0",
            }}
          >
            Специалисты компании помогут эффективно подобрать тип и размер
            облицовочных материалов и способы их крепления на фасаде. Cоставят
            спецификацию на комплектующие и материалы учитывая специфику и
            бюджет проекта.
          </p>
          <a
            style={{
              overflow: "hidden",
              marginLeft: "10px",
              fontSize: "25px",
              margin: "0",
            }}
            onclick="openCity(event)"
          >
            Узнать больше &#10144;
          </a>
        </div>
        <div>
          <img
            src="../../../images/primer.png"
            alt="RUGLASS"
            style={{ width: "400px" }}
          />
        </div>
      </div>
    );
  }
  
  export default FasadConstFirstPage;