import {render} from 'react-dom'
import { createElement } from 'react';

import Main from './Components/Main';
import './style.css'


render(createElement(Main), document.getElementById("root"));
