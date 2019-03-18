// A reducer takes in two things: 

// 1. The action (info about what happened)
// 2. Copy of the current state

const posts = (state = [], action) => {
  switch(action.type) {
    case 'INCREMENT_LIKES':
      console.log('Incrementing likes!');
      const i = action.index;
      return [
        ...state.slice(0, i), //Before the post we are updating
        {...state[i], likes: state[i].likes + 1}, //Updates the desired post
        ...state.slice(i + 1),  //After the post we are updating
      ]
    default:
      return state;
  }
  return state;
}

export default posts;
