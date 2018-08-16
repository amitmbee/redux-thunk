export const thunk = store => next => action => {
    if typeof action === 'function'{
        return action(store.dispatch, store.getState);//This is why we return a function instead of object in actionCreators while using redux-thunk.
                                                      //Note that redux-thunk by itself doesn't support promises. That is why we need to use promise
                                                      //supported libraries like axios
    }
    return next(action)
}

/*
How to use
This is just for learning purpose only.
import {thunk} from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'
import reducer from 'path/to/reducer'
const reduxStore = createStore(reducer, applyMiddleware(thunk))
*/
