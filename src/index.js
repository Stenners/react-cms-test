import { h, render} from 'preact';
import { Provider } from 'preact-redux'
import { createStore } from 'redux'
import testApp from './reducers' 
import ContactForm from './components/ContactForm';
import './sass/styles.scss';

const compList = document.querySelectorAll('[data-component]');

const componentMap = {
  'ContactForm': ContactForm
}

let store = createStore(testApp)

function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text
  }
}

store.dispatch(addTodo('First'))

for (let value of compList) {
  const Component = componentMap[value.dataset.component]; 
  render(<Provider store={store}><Component /></Provider>, value);
}