import React from 'react'
import "./navbar.css"
import { AuthConsumer } from './Auth';
import { useNavigate } from 'react-router-dom'


export default function Navbar() {
  const value = AuthConsumer();
  const navigate = useNavigate();


  function logout() {
    value.tokenValue(undefined)
    window.history.pushState(null, document.title, window.location.href);
  window.addEventListener('popstate', function(event) {
    window.history.pushState(null, document.title, window.location.href);
  });
    navigate("/")
  }
  return (
    <nav>
        <div className="name">
            <h2>
                Loknath
            </h2>
        </div>
        <div className="routes">
            
                <a href='#home'>Home</a>
                <a href='#about'>About</a>
                <a href='#skill'>Skill</a>
                <a href='#experince'>Experince</a>
                <a href='#project'>Projects</a>
                <a href='#contact'>Contact</a>
                <button className='logout_btn' onClick={logout}>Logout</button>
            
        </div>
    </nav>
  )
}
