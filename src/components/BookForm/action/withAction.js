import withHandlers from "../../../hoc/withHandlers";

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
})
