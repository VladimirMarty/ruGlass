import styles from '../UslugiFirstPage/uslugiFirstPage.module.css'
function UslugiFirstPage() {
    return (
        <div className={styles.all}
   
      >
        {" "}
        <p className={styles.p1}
   
        >
          Наши Услги
        </p>
        <p className={styles.p2}
    
        >
          Мы выполним работы по металлообработке любой сложности, сделаем это
          быстро и с высокой точностью, в соответствии с техническим заданием. ‍
          Готовы работать в индивидуальных проектах и специальных условиях.
          <a className={styles.a}
     
          >
            {" "}
            Подробнее &#10144;
          </a>
        </p>
      </div>
    );
  }
  
  export default UslugiFirstPage;
  