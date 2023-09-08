function UslugiFirstPage() {
    return (
        <div
        style={{
          display: "flex",
          margin: "30px",
          border: "2px solid black",
          alignItems: "center",
        }}
      >
        {" "}
        <p
          style={{
            fontSize: "40px",
            width: "1000px",
            padding: "20px",
          }}
        >
          Наши Услги
        </p>
        <p
          style={{
            fontSize: "20px",
            padding: "20px",
            // marginLeft: "150px",
          }}
        >
          Мы выполним работы по металлообработке любой сложности, сделаем это
          быстро и с высокой точностью, в соответствии с техническим заданием. ‍
          Готовы работать в индивидуальных проектах и специальных условиях.
          <a
            style={{
              marginLeft: "10px",
              fontSize: "25px",
            }}
          >
            {" "}
            Подробнее &#10144;
          </a>
        </p>
      </div>
    );
  }
  
  export default UslugiFirstPage;
  