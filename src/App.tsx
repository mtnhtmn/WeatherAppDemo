import React from 'react'

import {Route, Routes} from 'react-router-dom';
import LoginPage from "./router/LoginPage";
import HomePage from "./router/HomePage";
import {Provider} from "react-redux";
import {store} from "./store/store";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient()

function App() {

    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <div className="App">
                    <Routes>
                        <Route path={'/'} element={<LoginPage/>}/>
                        <Route path={'home'} element={<HomePage/>}/>
                    </Routes>
                </div>
            </QueryClientProvider>
        </Provider>
    )
}

export default App
