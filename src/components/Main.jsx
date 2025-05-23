import Post from "./Post"
import ContentPost from "./ContentPost"

function Main(){

    return(
        <main className="Main col-md-8 col-sm-12 ms-auto me-lg-5">
            <div className="text-center border-0">
                
                <ContentPost/>

            </div>

            <Post postText="Hello, everyone!" name="Lakshmi" time="5 Hours ago"/>
            <Post postText="Oops! Sun is gone!" name="Vishnu" time="2 Hours ago"/>

           

        </main>
    )
}

export default Main