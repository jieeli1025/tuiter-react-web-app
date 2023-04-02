import {useDispatch} from "react-redux";
import { likeTuit} from "../reducers/home-tuits-reducer";
import {deleteTuitThunk, updateTuitThunk} from "../../services/tuits-thunks";

import {useState} from "react";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart, faRetweet, faShare, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faComment, faHeart, faRetweet, faShare);





const TuitItem = (
    {
        tuit =  {
            "_id": 234,
            "topic": "Space",
            "username": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "../../image/starship.jpg",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "dislike":0,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }

    }

) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));

    }

    const updateTuitHandler = (tuit) => {
        dispatch(updateTuitThunk(tuit));
    }


    return(
        <div className="mb-3">
        <li key={tuit._id} className="list-group-item">
            <div className="row mb-3 ">

                <div className="col-1">
                    <img className="rounded-circle" src={"/images/" + tuit.image} width="45px"/>
                </div>


                <div className="col-11">
                    {/* user */}
                    <div className="d-flex justify-content-between ps-2">
                        <div>
                            <div>
                                <span className="fw-bolder">{tuit.username}</span>
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






                    <div className="row mt-2 d-flex justify-content-between">
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
                        <div className="col-2">
                            <div className="row">
                                <div className="col-2">
                                    <a ><FontAwesomeIcon icon={"retweet"}></FontAwesomeIcon> </a>
                                </div>
                                <div className="col-2">{tuit.retuits}</div>
                            </div>
                        </div>
                        <div className="col-2" >
                            <div className="row">
                                <div className="col-2">

                                    <a >
                                        <FontAwesomeIcon  className={ tuit.liked ? 'text-danger' : 'text-secondary'}
                                                          onClick={() => updateTuitHandler(
                                                              {
                                                                  ...tuit,
                                                                  likes: tuit.likes + 1,
                                                                  liked: true,
                                                              })} icon={"heart"}></FontAwesomeIcon>
                                    </a>
                                </div>
                                <div  className="col-2">{tuit.likes}</div>
                            </div>
                        </div>
                        <div className="col-2" >
                            <div className="row">
                                <div className="col-2">

                                    <a >
                                        <FontAwesomeIcon  className={ tuit.dislike ? 'text-grey' : 'text-grey'}
                                                          onClick={() => updateTuitHandler(
                                                              {
                                                                  ...tuit,
                                                                  dislike: tuit.dislike + 1
                                                              })} icon={faThumbsDown}></FontAwesomeIcon>
                                    </a>
                                </div>
                                <div  className="col-2">{tuit.dislike}</div>
                            </div>
                        </div>
                        <div className="col-2" >
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