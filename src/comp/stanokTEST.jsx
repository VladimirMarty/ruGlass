import { stanki } from "../utils/dataStanki";
import StanokProps from "./stanokProps";
const StanokTEST = () => {
  const stan = stanki;
  return (
    <div
      style={{
        height: "100%",
        border: "2px solid black",
        margin: "30px",
      }}
    >
      {stan.map((item) => (
        <StanokProps item={item} />
      ))}
    </div>
  );
};

export default StanokTEST;
