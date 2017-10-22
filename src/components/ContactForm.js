import { h, Component } from 'preact';
import { connect } from 'preact-redux';

class ContactForm extends Component {

  render() {
    console.log(this.props)
    return (
        <div className="container">
          <h1>{this.props.text}</h1>
          <button onClick={this.props.onTodoClick}>Button</button>
        </div>
      );
  }
}

function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text
  }
}

const mapStateToProps = (state) => {
  return {
    text: state.text
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(addTodo('Read the docs'));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactForm)