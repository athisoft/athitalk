import logo from '../assets/athisoft.png'

function Header(){

    return(
        <header className='header'>
            <div className='container-fluid py-2 bg-dark shadow-lg text-white'>
               
                
                
                <div className='row justify-content-between text-ce'>
                    <div className='col-4'>
                        <img className='ms-2 img-fluid' style={{height:45}} src={logo} alt="athitalk logo" />
                    </div>

                    <div className='col-4 d-lg-block d-none'>
                        <ul className='d-flex justify-content-center'>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                 <a href="#">Videos</a>
                            </li>
                        </ul>
                    </div>

                    <div className='col-4'>
                        <ul className='d-flex justify-content-end'>
                            <li>
                                button1
                            </li>
                            <li>
                                button1
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </header>
    );
}

export default Header