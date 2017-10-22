const testApp = (state = [], action) => {
  switch (action.type) {
    
    case 'ADD_TODO':
      return action
      break;

    default:
      return state
  }
}

export default testApp