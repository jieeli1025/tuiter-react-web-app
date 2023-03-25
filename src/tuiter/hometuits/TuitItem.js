import {useDispatch} from "react-redux";
import {deleteTuit, likeTuit} from "../reducers/home-tuits-reducer";
import {useState} from "react";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart, faRetweet, faShare } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faComment, faHeart, faRetweet, faShare);





const TuitItem = (
    {
        tuit =  {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "../../image/starship.jpg",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }

    }

) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    const likeTuitHandler = (id) => {
        dispatch(likeTuit(id));
    }


    return(
        <div className="mb-3">
        <li key={tuit._id} className="list-group-item">
            <div className="row">

                <div className="col-1">
                    <img className="rounded-circle" src={"/images/" + tuit.image} width="45px"/>
                </div>


                <div className="col-11">
                    {/* user */}
                    <div className="d-flex justify-content-between ps-2">
                        <div>
                            <div>
                                <span className="fw-bolder">{tuit.userName}</span>
                                <span className="ms-1 fa fa-circle-check fa-1x"></span>
                                <span className="text-secondary">{' ' + tuit.handle}</span>
                                <span className="text-secondary">{' · ' + tuit.time}</span>
                            </div>
                        </div>
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(tuit._id)}/>
                    </div>
                    <div className="ps-2">
                        {tuit.tuit}
                    </div>






                    <div className="row">
                        <div className="col-2">
                            <div className="row">
                                <div className="col-2">
                                    <a >
                                        <FontAwesomeIcon icon={"comment"}></FontAwesomeIcon>
                                    </a>
                                </div>
                                <div className="col-2">{tuit.replies}</div>
                            </div>
                        </div>
                        <div className="col-2" style={{marginLeft: "30px"}}>
                            <div className="row">
                                <div className="col-2">
                                    <a ><FontAwesomeIcon icon={"retweet"}></FontAwesomeIcon> </a>
                                </div>
                                <div className="col-2">{tuit.retuits}</div>
                            </div>
                        </div>
                        <div className="col-2" style={{marginLeft: "30px"}}>
                            <div className="row">
                                <div className="col-2">

                                    <a >
                                        <FontAwesomeIcon  className={ tuit.liked ? 'text-danger' : 'text-secondary'}
                                            onClick={() => likeTuitHandler(tuit._id)} icon={"heart"}></FontAwesomeIcon>
                                    </a>
                                </div>
                                <div  className="col-2">{tuit.likes}</div>
                            </div>
                        </div>
                        <div className="col-2" style={{marginLeft: "50px"}}>
                            <a >
                                <FontAwesomeIcon icon={"share"}></FontAwesomeIcon>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        </div>
    );
};
export default TuitItem;