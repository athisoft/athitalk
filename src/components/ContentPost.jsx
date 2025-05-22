import { height } from "@fortawesome/free-brands-svg-icons/fa42Group"
import './ContentPost.css'


function ContentPost(){

    return(
        <div className="contentPost card p-2 mt-2 shadow-sm mb-3" style={{height:'fit-content'}}>
            
            <div className="d-flex align-items-center justify-content-center px-lg-2 px-0">
            <img className="rounded-circle img-fluid" src="/images/profilePlaceholder.png" alt="profileImage" />  
            <input className="mx-1 mx-lg-4" style={{width:'100%', maxWidth:'600px', height:'fit-content'}} id="contentPost"  placeholder="Tell something to the world?"/>
            </div>
            
            <hr className="my-2" />

            <div className="d-flex gap-2 justify-content-center">
            <a className='btn btn-danger px-5' style={{Width:"fit-content"}}>Post</a>
            <a className='btn btn-danger px-5' style={{Width:"fit-content"}}>Reset</a>
            </div>
        </div>
    )
}

export default ContentPost