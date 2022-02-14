import React from "react";

export default function Form({ visible, actions, list, obj, oEv }) {
  const [inputVal, inputAction] = React.useState("");
  const [cheakVal, cheakAction] = React.useState("error");

  const [objVal, objAction] = React.useState(obj.id ? obj.title : "");
  const [objSVal, objSAction] = React.useState(obj.id ? obj.status : 0);

  // добавление новой записи
  const addTodo = () => {
    if (inputVal.trim() && [0, 1].indexOf(cheakVal) != -1) {
      actions([
        ...list,
        { title: inputVal, status: cheakVal, visibility: "visible" },
      ]);
      //Очистка полей
      inputAction("");
      uncheckAllRadio("select");
      cheakAction("");
    } else {
      alert("Заполните все поля !!!");
    }
  };
  //сохранение изменений
  const reSave = () => {
    if (obj.id >= 0 && objVal.trim().length > 0 && objSVal >= 0) {
      actions(
        list.map((el, ind) => {
          if (ind == obj.id) {
            console.log(objSVal);
            return { title: objVal, status: objSVal, display: "block" };
          } else {
            return el;
          }
        })
      );
      uncheckAllRadio("select");
      reset();
    } else {
      alert("Ошибка , что-то пошло не так ........");
    }
  };
  // сброс выбора существующей записи
  const reset = () => {
    oEv({});
  };

  // снятие выбора со всех radio button
  function uncheckAllRadio(name) {
    let buttons = document.getElementsByName(name);
    for (let i = 0; i < buttons.length; i++) buttons[i].checked = false;
  }

  // изменение состояния выбранной записи
  React.useEffect(() => {
    objAction(obj.title);
    objSAction(obj.status);
  }, [obj]);

  return (
    <div className="form" style={{ display: visible }}>
      {/* <div className="close">&#215;</div> */}
      <form
        method="GET"
        onSubmit={(e) => {
          e.preventDefault();
          addTodo();
        }}
      >
        <div className="text-field">
          <div className="text-field__icon text-field__icon_create">
            <input
              className="text-field__input"
              type="text"
              placeholder="input value ..."
              value={objVal ? objVal : inputVal}
              onChange={(e) =>
                obj.id >= 0
                  ? objAction(e.target.value)
                  : inputAction(e.target.value)
              }
            />
          </div>
        </div>
        <div>
          <div className="wrapper">
            <input
              type="radio"
              name="select"
              id="option-1"
              onChange={(e) => (obj.id >= 0 ? objSAction(0) : cheakAction(0))}
            />
            <input
              type="radio"
              name="select"
              id="option-2"
              onChange={(e) => (obj.id >= 0 ? objSAction(1) : cheakAction(1))}
            />
            {obj.id >= 0 ? (
              <input
                type="radio"
                name="select"
                id="option-3"
                onChange={(e) => objSAction(2)}
              />
            ) : (
              ""
            )}

            <label htmlFor="option-1" className="option option-1">
              <div className="dot"></div>
              <span>Ожидание</span>
            </label>
            <label htmlFor="option-2" className="option option-2">
              <div className="dot"></div>
              <span>В процессе</span>
            </label>

            {obj.id >= 0 ? (
              <label htmlFor="option-3" className="option option-3">
                <div className="dot"></div>
                <span>Выполнена</span>
              </label>
            ) : (
              ""
            )}
          </div>
          {/* <input type="radio" id="s-option" name="selector" value="test"  onChange={e => cheakAction(0)}/>
            <span>Ожидание</span>
       
         
            <input type="radio" id="t-option" name="selector" onChange={e => cheakAction(1)}/>
            <span>В процессе</span> */}
        </div>
        {obj.id >= 0 ? (
          <div>
            {" "}
            <button className="button" onClick={() => reSave()}>
              Сохранить
            </button>
            <button onClick={() => reset()} className="button">
              Сбросить
            </button>
          </div>
        ) : (
          <button className="button">Создать</button>
        )}
      </form>
    </div>
  );
}
