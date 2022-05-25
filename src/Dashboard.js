import React,{useState,useEffect} from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
    const [data,setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/allprofiles',{
            headers :{
                'x-token' : localStorage.getItem('token')
            }
        }).then(res => setData(res.data))
      
    },[])
    if(!localStorage.getItem('token')){
        return <Navigate to='/login' />
    }
  return (
    <div>
        <nav className="navbar bg-dark">
          <h1>
          < Link to="/"><i className="fas fa-code"></i> GeeksBook </Link>
          </h1>
          <ul>
            <li>< Link to="/myprofile">My Profile</Link></li>
            <li>< Link to="/login" onClick={() => localStorage.removeItem('token')}>Logout</Link></li>
          </ul>
        </nav>
      <section className="container">
        <h1 className="large text-primary">Developers</h1>
        <p className="lead">
          <i className="fab fa-connectdevelop"></i> Browse and connect with developers
        </p>
        <div className="profiles">
          {data.length>=1 ?
          data.map(profile =>
            <div className="profile bg-light">
              <img
              className="round-img"
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
              alt=""
              />
              <div>
                <h2>{profile.fullname}</h2>
                <p>{profile.email}</p>
                <p>India</p>
                <Link to={`/indprofile/${profile.fullname}/${profile.email}/${profile.skill}/${profile._id}`} className="btn btn-primary">View Profile</Link>
              </div>

              <ul>
                {profile.skill.split(",").map(skill =>
                <li className="text-primary">
                <i className="fas fa-check"></i>{skill}
                </li> 
                )}
            
            
              </ul>
            </div>
            
          )

          :null}
        


        </div>
      </section>
    </div>
  )
}

export default Dashboard
