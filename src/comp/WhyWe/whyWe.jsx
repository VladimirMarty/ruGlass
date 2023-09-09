import styles from '../WhyWe/whyWe.module.css'
function WhyWe() {
    return (
        <div className={styles.all}
   
      >
 
          <h2 className={styles.h2}
        
          >
            ПОЧЕМУ МЫ
          </h2>
    
        <div className={styles.info}
  
        >
          <div>
            <img className={styles.image}
              src="../../../images/pochemu/1.png"
              alt="RUGLASS"
          
            />
            <p className={styles.p}>Квалифицированный персонал</p>
          </div>
          <div>
            <img className={styles.image}
              src="../../../images/pochemu/2.png"
              alt="RUGLASS"
        
            />
            <p className={styles.p}>Входим в состав СРО на проектирование</p>
          </div>
          <div>
            <img className={styles.image}
              src="../../../images/pochemu/3.png"
              alt="RUGLASS"
         
            />
            <p className={styles.p}>Широкий опыт поставок в страны СНГ</p>
          </div>
          <div>
            <img className={styles.image}
              src="../../../images/pochemu/4.png"
              alt="RUGLASS"
       
            />
            <p className={styles.p}>Собственные средства производства</p>
          </div>
          <div>
            <img className={styles.image}
              src="../../../images/pochemu/5.png"
              alt="RUGLASS"
            
            />
            <p className={styles.p}>Две производственные площадки в Конаково и Ручьях</p>
          </div>
          <div>
            <img className={styles.image}
              src="../../../images/pochemu/6.png"
              alt="RUGLASS"
          
            />
            <p className={styles.p}>Надежные отношения с экструзионными заводами</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default WhyWe;