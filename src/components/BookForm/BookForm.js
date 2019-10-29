import React from "react";
import withAction from "./action/withAction";

const BookForm = (props)=> {
  const { firstName } = props.data;
  return (
    <form onSubmit={props.submit}>
      <h1 onClick={props.onClick}>Заголовок</h1>
      <div>
        <label>Book Name</label>
        <input value={firstName} onChange={props.onChange}/>
      </div>
    </form>
  )
};

export default withAction(BookForm)
