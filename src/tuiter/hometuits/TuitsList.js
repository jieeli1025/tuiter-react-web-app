import React from "react";
import TuitItem from "./TuitItem";
import WhatsHappening from "../home/whats-happening";
import {useSelector} from "react-redux";

const HomeTuitsList = () => {
    const tuitsArray = useSelector(state => state.tuits)
    return (
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            <ul >
                {
                    tuitsArray.map(tuits =>
                        <TuitItem key={tuits._id} tuit={tuits}/>)
                }
            </ul>
        </>
    );
};
export default HomeTuitsList;