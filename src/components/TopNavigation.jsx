import logo from '../assets/athisoft.png'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faComment} from '@fortawesome/free-solid-svg-icons'
import {faGrip} from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'

import './TopNavigation.css'

function TopNavigation(){

    const imageStyle = {
      maxHeight:"40px",
    }


    return(
        <nav className="navbar shadow-sm sticky-top">
            <div className="container">

                <div className='d-flex align-items-center'>
                    <Link to='/'>
                     <a className="navbar-brand p-0" href="/"><img style={imageStyle} src={logo} alt="athisoft-logo"/></a>  
                    </Link>
                </div>

                <div className='d-none d-md-block' style={{minWidth:"400px"}}>
                    <input id='search' className='form-control' type="search" placeholder="Search" aria-label="Search"/>
                </div>

                <div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3" style={{flexDirection:"row"}}>

                        <li className="nav-item">
                        <a className="nav-link active" title='Menu' aria-current="page" href="#">
                           <FontAwesomeIcon icon={faGrip} /> 
                        </a>
                        </li>

                        <li className="nav-item message">
                        <a className="nav-link active" title='Message' aria-current="page" href="#">
                           <FontAwesomeIcon icon={faComment} /> 
                           
                           <p>10+</p>
                        </a>
                        </li>

                        <li className="nav-item">
                        <a className="nav-link active" title='Profile' aria-current="page" href="#">
                            <FontAwesomeIcon icon={faUser} />
                        </a>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    )
}
export default TopNavigation