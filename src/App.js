import React, { Fragment  } from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import Myprofile from './Myprofile';
import Indprofile from './Indprofile';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Fragment>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/register' element={<Register/>}/>
            <Route exact path='/dashboard' element={<Dashboard/>}/>
            <Route exact path='/myprofile' element={<Myprofile/>}/>
            <Route exact path="/indprofile/:fullname/:email/:skill/:id" element={<Indprofile/>} />


          </Routes>
        </Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;