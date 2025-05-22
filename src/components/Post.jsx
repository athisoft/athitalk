import PostInteraction from "./PostInteraction"

function Post(props){

    return(
              <div className="feedContent shadow-sm card py-1 pb-4 px-5 my-2 border-0">
                <div className="d-flex align-items-center">

                    <img className="avatar img-fluid" height="50px" src="/img1.webp" alt="testimage"/>
                        
                     <div className="ps-2 d-flex flex-column">
                        <div className="d-flex gap-1 align-items-center">
                            <p className="fw-semibold mb-0">{props.name}</p>
                            <span>-</span>
                            <a className="fw-semibold text-decoration-none" href="#">Follow</a>
                        </div>
                        <div className="mt-1">
                           <p className="m-0 small">10 Hours ago</p>
                        </div>
                    </div>
                </div>

                <p>{props.postText}</p>

                <img className="postImage img-fluid" src="/img3.webp" alt="test" />

                 <PostInteraction/>
            </div>
    )
}

export default Post