import 'bootstrap/dist/css/bootstrap.min.css'
import './MyCustom.css'
import logo from '../assets/athisoft.png'
import social from '../assets/social.png'
import Footer from '../components/Footer'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faComment} from '@fortawesome/free-solid-svg-icons'
import {faGrip} from '@fortawesome/free-solid-svg-icons'
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group'

function HomePage(){
    const imageStyle = {
      maxHeight:"40px",
    }
    return(
        <section>

    <nav className="navbar shadow-sm sticky-top">
            <div className="container">

                <div className='d-flex align-items-center'>
                    <a className="navbar-brand p-0" href="/"><img style={imageStyle} src={logo} alt="athisoft-logo"/></a>  
    
                </div>


                <div>
                    <ul class="navbar-nav me-auto gap-2 mb-2 mb-lg-0 gap-3" style={{flexDirection:"row"}}>

                        <li class="nav-item">
                            <input className='form-control' type="text" placeholder='Email'/>
                            
                        </li>

                        <li class="nav-item">
                            <input className='form-control' type="password" placeholder='Password'/>
                        </li>

                        <li class="nav-item">
                            <button className='btn btn-danger'>Login</button>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>

            <div className='container'>
         
            <div className="row justify-content-center"  style={{minHeight:'92vh'}}>

                <div className='d-none d-lg-block col-12 col-lg-6'>
                    <img style={{maxWidth:500}} className='img-fluid' src={social} alt="socialImage" draggable="false" />
                </div>

                <div className="col-12 col-lg-6">
                        <form className="p-5 d-flex flex-column bg-white gap-2 shadow-sm" action="#">

                            <div className='form-group d-flex flex-column gap-3 align-content-start' style={{maxWidth:'600px'}}>
                            
                            <b className='mb-2'>Register:</b>
                           
                            <input className='form-control' type="text" name="username" id="username" placeholder='Name' />
                           
                            <input className='form-control' type="tel" name="mobile" id="mobile" placeholder='Mobile' />
                            
                            <input className='form-control' type="email" name="email" id="email" placeholder='Email' />
                         
                            <input className='form-control' type="password" name="Password" id="Password" placeholder='Password' />
                         
                            <input className='form-control' type="password" name="ConfirmPassword" id="ConfirmPassword" placeholder='Confirm Password'/>

                            <button className='btn btn-danger mt-2' style={{width:"fit-content"}}>Register</button>

                            </div>

                        </form>
                </div>

                <div className='col-12'>
                    <h1>The First Indian Social Media</h1>
                       <h4><span className='text-danger fw-bold'>Made in India. </span></h4>
                       <p ><q className='fw-semibold'>Make in India</q> - <span className='text-danger fw-bold'>Modi Ji</span></p>
                </div>


            </div>
        </div>

            <Footer/>
        </section>

    
    )
}

export default HomePage