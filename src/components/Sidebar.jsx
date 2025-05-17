function Sidebar(){

    return(
        <aside className="Sidebar  col-4">
            <div className="childDiv">
                <div className="text-center py-1 pb-0">
                    <h3>Navigation</h3>
                </div>
                <hr className="text-dark" />
                <ul>
                    <li><a href="#">Friends</a></li>
                    <li><a href="#">Pages</a></li>
                    
                </ul>
            </div>
            

        </aside>
    )
}

export default Sidebar