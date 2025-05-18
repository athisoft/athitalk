import Post from "./Post"

function Main(){

    return(
        <main className="Main col-md-8 col-sm-12 ms-auto me-lg-5">
            <div className="text-center">
                <h2>User Posts</h2>
            </div>
            <hr />


            <Post postText="Hello, everyone!" name="Lakshmi"/>
            <Post postText="Oops! Sun is gone!" name="Vishnu"/>


        </main>
    )
}

export default Main