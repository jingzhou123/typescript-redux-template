import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { CounterReducer } from './features/counter'
import reduxThunk from 'redux-thunk'

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  count: CounterReducer,
})

const store = createStore(
  rootReducer,
  /* preloadedState, */ 
  compose(applyMiddleware(reduxThunk), devToolsEnhancer({}))
)

export default store
