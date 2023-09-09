import styles from'../UslugiProps/uslugiProps.module.css'
function UslugiProps({ item }) {
  return (
    <form className={styles.form}
      
    >
      <p className={styles.p1}
     
      >
        {item.type}
      </p>
      <p className={styles.p2}
   
      >
        {item.name}
      </p>

      <p className={styles.p3}
       
      >
        {item.title}
      </p>

      <video className={styles.video}
        src={item.image}
        alt={item.name}
      
      />
    </form>
  );
}

export default UslugiProps;
