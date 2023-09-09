import styles from '../Tabs/tabs.module.css'
function Tabs(props) {
  return (
    <div className={styles.all}
  
    >
      <button className={styles.btn}
     
        onclick="openCity(event)"
      >
        Услуги
      </button>
      <button className={styles.btn}
   
        onclick="openCity(event)"
      >
        Фасадные конструкции
      </button>
      <button className={styles.btn}
   
        onclick="openCity(event)"
      >
       
        Контакты
      </button>
    </div>
  );
}

export default Tabs;
