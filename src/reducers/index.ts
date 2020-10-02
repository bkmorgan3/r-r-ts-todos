import {combineReducers} from 'redux'
import {TodosReducer} from './todos'
import { Todo } from '../actions'

export interface StoreState {
  todos: Todo[]
}

export const reducers = combineReducers({
  todos: TodosReducer
})