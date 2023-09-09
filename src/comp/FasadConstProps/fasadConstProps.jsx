import objects from "../../utils/dataObjects";
import styles from "../FasadConstProps/fasadConstProps.module.css";
function FasadConstProps({ item }) {
  return (
    <form className={styles.form}>
      <img className={styles.image} src={item.image} alt={item.name} />
      <div>
        <p className={styles.p}>{item.name}</p>

        <div className={styles.system}>
          <p>Система</p>
          <p>{item.system}</p>

          <p>Заказчик</p>
          <p>{item.order}</p>

          <p>Подрядчик</p>
          <p>{item.contract}</p>
        </div>
      </div>
      <div>
        <p>Вид работ</p>
        <p>{item.work}</p>

        <p>облицовка</p>
        <p>{item.face}</p>
      </div>
      <div>
        <p>площадь</p>
        <p>{item.square}</p>

        <p>высотность</p>
        <p>{item.height}</p>
      </div>
    </form>
  );
}

export default FasadConstProps;
