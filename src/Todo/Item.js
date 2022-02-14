export default function Item({ value, id, action, list, loadData }) {
  let colors = ["grey", "blue", "green"];
  // удаление записи по id
  function Delete() {
    action(list.filter((el, ind) => ind != id));
  }
  return (
    <div
      className="item"
      style={{ color: colors[value.status], display: value.display }}
    >
      <span onClick={() => loadData(value, id)}>
        {" "}
        {value.title.length > 33
          ? value.title.substring(0, 33) + "..."
          : value.title}{" "}
      </span>
      <span
        className="deleteButton"
        style={{
          position: "relative",
          left: 0,
          bottom: -5,
          color: "red",
          fontSize: 30,
          // isnlineSize: "150px",
          //   overflowWrap: "wrap",
        }}
        onClick={() => Delete()}
      >
        &#215;
      </span>
    </div>
  );
}
