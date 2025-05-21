function Footer() {
    let currentDate = new Date()

    return(
        <>
        <div className="footer container-fluid bg-dark text-white text-center m-0 p-0">
            <strong className="pt-2 fw-semibold"> &copy; All rights reserved {currentDate.getFullYear().toString()}</strong> | <a href="#"> Teams</a> | <a href="#">Privacy & Policy</a>
        </div>
        </>
    )
}

export default Footer