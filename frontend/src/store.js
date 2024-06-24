import { createStore , combineReducers  , applyMiddleware} from "redux"
import {thunk} from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import { DataFromApi, productDetailsReducer, productReducer } from "./reducers/productReducers";
import { userReducer } from "./reducers/userReducers";
import { communityReducer } from "./reducers/communityReducer";


const reducer = combineReducers({
  products: productReducer , 
  productDetails : productDetailsReducer,
  user:userReducer,
  newProductDetails : productDetailsReducer,
  fromAPI : DataFromApi
});

let initialState = {

}

const middleware= [thunk]

const store = createStore(
  reducer ,
  initialState ,
  composeWithDevTools(applyMiddleware(...middleware))
)


export default store ;
