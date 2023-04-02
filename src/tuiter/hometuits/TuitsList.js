import React, {useEffect} from "react";
import TuitItem from "./TuitItem";
import WhatsHappening from "../home/whats-happening";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk}  from "../../services/tuits-thunks";

const HomeTuitsList = () => {
    const {tuits, loading} = useSelector(
        state => state.tuitsData)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])


    return (
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                tuits.map(tuit =>
                    <TuitItem key={tuit._id} tuit={tuit}/>)
            }
        </>
    );
};
export default HomeTuitsList;