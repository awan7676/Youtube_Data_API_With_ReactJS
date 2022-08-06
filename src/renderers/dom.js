import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import { App } from 'components/App';

import '../styles/index.css';

// ReactDOM.render(
//   <App initialData={window.__R_DATA.initialData} />,
//   document.getElementById('root'),
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App initialData={window.__R_DATA.initialData} />
  </React.StrictMode>
);
