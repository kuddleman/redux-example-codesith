const { createStore } = require('redux')

//THREE Create initial state
const initialState = {
  age: 21,
}

//TWO Create Reducer.  Reducer gets state and action
const myReducer = ( state = initialState, action ) => {


  //FIVE  Write what actions do.
     //we cannot change state directly.  First make copy of state
     const newState= {...state}

     if( action.type === 'ADD') {
       newState.age += 1
     }
     if( action.type === 'SUBTRACT' ) {
       newState.age -= 1
     }

     return newState
}

// ONE  Create store
//store has state and a reducer
const store = createStore( myReducer )

//SIX after creating store, SUBSCRIBE
store.subscribe(() => {
  console.log('state changed' + JSON.stringify(store.getState()))
})

//FOUR  Write actions

store.dispatch({ type:'ADD' })
store.dispatch({ type:'SUBTRACT' })

