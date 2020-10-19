import authors from "./authors"
import books from "./books"
import {combineReducers} from "redux"

const RootReducer = combineReducers({
    authorsState: authors, 
    booksState: books
})

export default RootReducer;
