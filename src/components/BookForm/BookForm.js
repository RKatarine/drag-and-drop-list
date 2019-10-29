import React from "react";
import withHandlers from "../hoc/withHandlers";

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

export default withHandlers({
  submit: props => values => {
    console.log(props);
    console.log(values);
  },
  onClick: props => event => {

    console.log(props);
    console.log(event)
  },
  onChange: props => event => {

    console.log(props);
    console.log(event)
  }
})(BookForm)
