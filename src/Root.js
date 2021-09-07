import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import async from "middlewares/async";
import stateValidator from "middlewares/stateValidator";
import reducers from "reducers";

export default ({ children, intialState = {} }) => {
    const store = createStore(
        reducers,
        intialState,
        applyMiddleware(async, stateValidator)
    );
    return <Provider store={store}>{children}</Provider>;
};
