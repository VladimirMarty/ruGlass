function WhyWe() {
    return (
        <div
        style={{
          display: "flex",
          border: "2px solid black",
          flexDirection: "column",
          margin: "30px",

          padding: "20px",
        }}
      >
        <div>
          <h2
            style={{
              fontSize: "40px",
              width: "1000px",
              margin: "0",
            }}
          >
            ПОЧЕМУ МЫ
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",

            alignItems: "center",
          }}
        >
          <div>
            <img
              src="../../../images/pochemu/1.png"
              alt="RUGLASS"
              style={{ width: "100px", height: "100px" }}
            />
            <div>Квалифицированный персонал</div>
          </div>
          <div>
            <img
              src="../../../images/pochemu/2.png"
              alt="RUGLASS"
              style={{ width: "100px", height: "100px" }}
            />
            <div>Входим в состав СРО на проектирование</div>
          </div>
          <div>
            <img
              src="../../../images/pochemu/3.png"
              alt="RUGLASS"
              style={{ width: "100px", height: "100px" }}
            />
            <div>Широкий опыт поставок в страны СНГ</div>
          </div>
          <div>
            <img
              src="../../../images/pochemu/4.png"
              alt="RUGLASS"
              style={{ width: "100px", height: "100px" }}
            />
            <div>Собственные средства производства</div>
          </div>
          <div>
            <img
              src="../../../images/pochemu/5.png"
              alt="RUGLASS"
              style={{ width: "100px", height: "100px" }}
            />
            <div>Две производственные площадки в Конаково и Ручьях</div>
          </div>
          <div>
            <img
              src="../../../images/pochemu/6.png"
              alt="RUGLASS"
              style={{ width: "100px", height: "100px" }}
            />
            <div>Надежные отношения с экструзионными заводами</div>
          </div>
        </div>
      </div>
    );
  }
  
  export default WhyWe;