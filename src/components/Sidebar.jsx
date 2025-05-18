function Sidebar(){

    return(
        <aside className="Sidebar m-0 col-3 d-md-block d-none">
            <div className="childDiv ">
                {/* <div className="text-center bg-black py-1 pb-0">
                    <h4>Navigation</h4>

                    <hr className="py-0 text-white" />
                </div> */}
               
                <ul className="pt-4 ">
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Message</a></li>
                    <li><a href="#">Friends</a></li>
                    <li><a href="#">Videos</a></li>
                    <li><a href="#">Images</a></li>
                    
                </ul>
            </div>
            

        </aside>
    )
}

export default Sidebar