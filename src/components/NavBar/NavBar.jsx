import anime from 'animejs/lib/anime.es.js';
import './NavBar.css';
import '../../index.css';
import { NavLink } from 'react-router-dom';
import circle from '../../assets/circle.svg';
import email from '../../assets/email.png';
import githubLogo from '../../assets/githublogo.png';
import linkedInLogo from '../../assets/linkedinlogo.png';
import { HashLink as Link } from 'react-router-hash-link';

const NavBar = ( {color} ) => {




  return (
    
    <nav>
        <div className= "container">
            <div className = "header">

                <div className= "header-left">

                    <a href ="https://github.com/ethanluc7">
                        <img className = "icons" src = {githubLogo} alt = 'github logo'/>
                    </a>


                    <a href= "https://www.linkedin.com/in/ethan-luc-29035325a/"> 
                        <img className = "icons" src = {linkedInLogo} alt = 'linkedin logo' />
                    </a>
                    
                    <a href= "mailto:ethan.q.luc@gmail.com">
                        <img className = "icons email" src = {email} alt = 'email logo' />
                    </a>
          
                </div>

                <div className =  {`header-right ${color}`}>
     
                    <Link to= "#About" smooth className="link first">About</Link>
                    <Link className = "link">Projects</Link>
                    <Link className = "link">Experience</Link>
                    
                </div>



            </div>
        </div>
    </nav>
  )
}

export default NavBar
