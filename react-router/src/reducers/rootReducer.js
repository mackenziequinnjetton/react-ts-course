const initialState = {
  cards: [
    {
      id: 1,
      title: 'Alex',
      body: 'Alex is a cool person'
    },
    {
      id: 2,
      title: 'Wilma',
      body: 'Wilma is a cool person'
    },
    {
      id: 3,
      title: 'John',
      body: 'Alex is a cool person'
    }
  ],
  users: []
}

const rootReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'DELETE_CARD':
      let newCards = state.cards.filter(card => {
        return action.id !== card.id
      });
      return {
        ...state,
        cards: newCards
      }
    case 'FETCH_USERS':
      return {
        ...state,
        users: action.payload
      }

    default:
      return state;
  }
}

export default rootReducer;