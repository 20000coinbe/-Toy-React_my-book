import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import reducer from "./modules/reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./modules/rootSaga";
import TokenService from "../services/TokenService";
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";

export const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({
    history: createBrowserHistory(),
  });

const create = () => {
  const token = TokenService.get();
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    reducer(routerReducer),
    {
      auth: {
        token,
        loading: false,
        error: null,
      },
    },
    composeWithDevTools(applyMiddleware(sagaMiddleware, routerMiddleware))
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default create;

export const history = createReduxHistory(create());
