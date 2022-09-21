import './index.css';

import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import {ContextProvider} from './Context/ContextProvider'

ReactDOM.render(<ContextProvider>
                    <App />
                </ContextProvider>,
                document.getElementById('root')
);
