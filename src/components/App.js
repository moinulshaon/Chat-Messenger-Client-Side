import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";

import reducers from "../reducers/index";
import ChatAppBar from "./ChatAppBar";
import ActiveUsersDrawer from "./ActiveUsersDrawer";
import UserDialogue from "./UserDialogue";

class App extends Component {
    render() {
        const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
        return (
            <Provider store={createStoreWithMiddleware(reducers)}>
                <div className="App">
                    <UserDialogue />
                    <ChatAppBar />
                    <ActiveUsersDrawer />
                </div>
            </Provider>
        );
    }
}

export default App;
