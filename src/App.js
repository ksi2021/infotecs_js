import React from "react";
import "./App.css";
import Form from "./Todo/Form";
import List from "./Todo/List";

function App() {
  const [TodoList, ListActions] = React.useState([
    { title: "test1", status: 0, display: "block" },
    { title: "test2", status: 1, display: "block" },
    { title: "test3", status: 1, display: "block" },
  ]);
  const [Modal, ModalAction] = React.useState("block");
  const [obj, objEvents] = React.useState({});

  const load = (data,id) => {data.id = id;objEvents(data) };
  const hide = () => ModalAction("none");
  const show = () => ModalAction("block");
  return (
    <div className="App">
      <List list={TodoList} load={load} action={ListActions}></List>,
      <Form
        visible={Modal}
        list={TodoList}
        obj = {obj}
        oEv = {objEvents}
        actions={ListActions}
        hide={hide}
      ></Form>
    </div>
  );
}

export default App;
