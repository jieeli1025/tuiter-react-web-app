import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCoffee, faComment, faHeart, faRetweet, faUpload} from '@fortawesome/free-solid-svg-icons';



const PostListItem = (
    {
        tuit = {
            "avatar": "../../images/musk.jpeg",
            "author": "Elon Musk",
            "account": "elonmusk",
            "content": "Amazing show about inspiration misson!",
            "image": "../../images/muskimg.jpeg",
            "title": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "content_shared": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ..."
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2 ">
                    <img alt="" width={48} height={48} style={{borderRadius:'50%', marginLeft:"10px"}} src={`/image/${tuit.avatar}`}/>
                </div>
                <div className="col-8">
                    <div className="fs-6 text-black-50">{tuit.author} @{tuit.account} -2h</div>
                    <div className = "fs-6 text-black"> {tuit.content} </div>
                    <div> <img alt="" style={{height: "100%", width: "100%"}}  src={`/image/${tuit.image}`}/></div>
                    <div className="fs-6 text-black">{tuit.title} </div>
                    <div className="fs-6 text-black-50">{tuit.content_shared} </div>
                    <nav className="mt-2">
                        <FontAwesomeIcon icon={faComment}  className ="col-3"/>
                        <FontAwesomeIcon icon={faRetweet}  className ="col-3" />
                        <FontAwesomeIcon icon={faHeart}  className ="col-3"/>
                        <FontAwesomeIcon icon={faUpload}  className ="col-3"/>
                    </nav>
                </div>
                <div className="col-2 ">
                   <p> ... </p>
                </div>

            </div>
        </li>
    );
};
export default PostListItem;