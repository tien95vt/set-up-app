import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Test1 from './components/Test1/Test1';
import Layout from './container/Layout/Layout';

import  './App.scss';

function App() {
  return (
    <div className="App">
      <Layout>
        <h1>hackathon</h1>
        <Test1 />
      </Layout>
    </div>
  );
}

export default App;
