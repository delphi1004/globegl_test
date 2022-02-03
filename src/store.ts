import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'
import stateReducer from './reducers/stateReducer'

export type RootState = ReturnType<typeof Store.getState>

const reducer = combineReducers({
  systemState: stateReducer,
})

const Store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default Store
