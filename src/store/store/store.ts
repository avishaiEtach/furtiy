import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { thunk } from "redux-thunk";
import { productsReducer } from "./products.reducer";

const rootReducer = combineReducers({
  productsModel: productsReducer, //use in useLanguage component
});

const composeEnhancers = compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
