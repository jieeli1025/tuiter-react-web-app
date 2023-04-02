import Nav from "../nav.js";
import NavigationSidebar
    from "./NavigationSideBar/index";

import WhoToFollowList from "./who-to-follow-list/index";
import ExploreComponent from "./explore";
import homeTuitsReducer from "./reducers/home-tuits-reducer";
import postReducer from "./reducers/posts-reducer";
import whoReducer from "./reducers/who-reducer";
import profileReducer from "./reducers/profile-reducer";
import {Routes, Route} from "react-router";
import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import HomeTuitsList from "./hometuits/TuitsList";
import ProfileComponent from "./profile/index";
import EditProfile   from "./profile/edit-profile";


const store = configureStore({
    reducer: {who: whoReducer, tuitsData:homeTuitsReducer, posts: postReducer,  profile:profileReducer}});



function Tuiter() {
    return (
        <Provider store={store}>

        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="home"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>

                <Routes>
                    <Route path="/*"      element={<HomeTuitsList/>}/>
                    <Route path="/home"        element={<HomeTuitsList/>}/>
                    <Route path="explore"  element={<ExploreComponent/>}/>
                    <Route path="/profile" element={<ProfileComponent/>}/>
                    <Route path="/edit-profile" element={<EditProfile/>}/>
                </Routes>

            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>
        </div>  </Provider>
    );
}

export default Tuiter