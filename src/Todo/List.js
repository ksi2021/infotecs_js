import React from "react";
import Item from "./Item";
export default function List({ list, action, load }) {
  // функция поиска , ищет вхождение продстроки (все приводиться к нижнему регистру)
  const search = (val) => {
    if (val.trim())
      action(
        list.map((element) => {
          if (element.title.toLowerCase().indexOf(val.trim()) === -1)
            element.display = "none";
          else   element.display = "block";
          return element;
        })
      );
    if (!val.trim())
    {
      action( list.map((element) => {
        element.display = "block";
        return element;
      }))
    }
  };

  return (
    <div className="list">
      <div className="text-field">
        <div className="text-field__icon text-field__icon_search">
          <input
            className="text-field__input"
            type="text"
            placeholder="search value ..."
            onInput={(e) => search(e.target.value)}
          />
        </div>
      </div>

      {list.length > 0 ? (
        list.map((element, index) => {
          return <Item key={index} id={index} list={list} loadData={load} action={action} value={element}></Item>;
        })
      ) : (
        <h3>list is empty</h3>
      )}
    </div>
  );
}
