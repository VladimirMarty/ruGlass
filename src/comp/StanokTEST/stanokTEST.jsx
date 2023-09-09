import styles from "../StanokTEST/stanokTEST.module.css"
import { stanki } from "../../utils/dataStanki";
import StanokProps from "../StanokProps/stanokProps";
const StanokTEST = () => {
  const stan = stanki;
  return (
    <div className={styles.all}
     
    >
      {stan.map((item) => (
        <StanokProps item={item} />
      ))}
    </div>
  );
};

export default StanokTEST;
