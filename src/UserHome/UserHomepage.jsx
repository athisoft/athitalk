import Sidebar from '../components/Sidebar'
import Main from '../components/Main'
import Footer from '../components/Footer'
import TopNavigation from '../components/TopNavigation'

function UserHomepage(){

    return(
        <div>
            <TopNavigation/>
            <div className='container'>
        
            <div className='row'>
            <Sidebar/>
            <Main/>
            </div>
            </div>
            <Footer/>
        </div>
    )
}

export default UserHomepage