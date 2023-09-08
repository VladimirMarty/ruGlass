import objects from "../utils/dataObjects";

function FasadConstProps({ item }) {
  return (
    <form
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
     
        border:'1px solid black'
      }}
    >
      <img
        src={item.image}
        alt={item.name}
        style={{
          width: "300px",
          margin:'10px'
        }}
      />
      <div>
        <p      style={{
       
       fontSize:'30px'
      }}>{item.name}</p>

        <div      style={{
        display: "flex",
     
      }}
        >
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
