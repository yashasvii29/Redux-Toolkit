// global store...where we will be storing all of our components state

// redux toolkit is used for the state management in react and to overcome the propblem of prop drilling
// things that are needed to create our redux store are ->
// 1. reducer(reducer function)
// 2. state(initial state)
// 3. store(store function from redux library)
// 4 .slice
// 5 action


// Example ->

import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({
    reducer:
})

export default store;