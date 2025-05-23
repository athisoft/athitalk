import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faNewspaper} from '@fortawesome/free-solid-svg-icons'
import {faMessage} from '@fortawesome/free-solid-svg-icons'
import {faUserFriends} from '@fortawesome/free-solid-svg-icons'
import {faVideo} from '@fortawesome/free-solid-svg-icons'
import {faImage} from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css'

function Sidebar(){

    return(
        <aside className="Sidebar m-0 col-3 d-md-block d-none">
            <div className="childDiv">
                {/* <div className="text-center bg-black py-1 pb-0">
                    <h4>Navigation</h4>

                    <hr className="py-0 text-white" />
                </div> */}
               
                <ul className="pt-4 ">
                    <li><a href="#"> <FontAwesomeIcon icon={faUser}/> Profile</a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faNewspaper}/> News</a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faMessage}/> Message</a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faUserFriends}/> Friends</a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faVideo}/> Videos</a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faImage}/> Images</a></li>
                    
                </ul>
            </div>
            
            <hr />
            <p className='p-0'>Made by AthiSoft</p>

        </aside>
    )
}

export default Sidebar