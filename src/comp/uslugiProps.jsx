function UslugiProps({ item }) {
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid black",
        padding: "10px",
      }}
    >
      <p
        style={{
          fontSize: "5px",
          margin: "0",
        }}
      >
        {item.type}
      </p>
      <p
        style={{
          fontSize: "40px",
          margin: "0",
        }}
      >
        {item.name}
      </p>

      <p
        style={{
          fontSize: "25px",
          margin: "0",
        }}
      >
        {item.title}
      </p>

      <video
        src={item.image}
        alt={item.name}
        style={{
          width: "200px",
        }}
      />
    </form>
  );
}

export default UslugiProps;
