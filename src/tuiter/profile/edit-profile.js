import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {updateProfile} from "../reducers/profile-reducer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCamera,faTimes } from '@fortawesome/free-solid-svg-icons'

const EditProfile = () => {
    const profile = useSelector(state => state.profile);
    const [userName, setUserName] = useState(profile.username);
    const [bio, setBio] = useState(profile.bio);
    const [location, setLocation] = useState(profile.location);
    const [website, setWebsite] = useState(profile.website);
    const [birthday, setBirthday] = useState(profile.dateOfBirth);

    const dispatch = useDispatch();
    const saveChangeHandler = () => {
        dispatch(updateProfile({
            "username": userName,
            "bio": bio,
            "location": location,
            "website": website,
            "dateOfBirth": birthday
        }))
    }

    return (
        <div className="edit-profile">



            <div className="border border-bottom-0" style={{"marginBottom": "60px"}}>


                <div className="heading ">

                    <Link to="/tuiter/profile" className="btn btn-light rounded-pill fa-pull-left fw-bolder mt-2 mb-2 ms-2">
                        <i> <FontAwesomeIcon icon={faArrowLeft} /> </i>
                    </Link>
                    <Link to="/tuiter/profile" className="btn btn-dark rounded-pill fa-pull-right fw-bolder mt-2 mb-2 me-2"
                          onClick={saveChangeHandler}>
                        Save
                    </Link>
                    <h5 className="p-3">Edit profile</h5>




                </div>






                <div className="position-relative">

                    <img className="w-100" src={"/images/" + profile.bannerPicture} height='300px'
                         style={{"filter": "brightness(60%)"}}/>
                    <button
                        className="position-absolute start-50 top-50 translate-middle btn btn-light btn-sm rounded-pill ms-5">
                        <FontAwesomeIcon icon={faTimes} size="lg" />
                    </button>

                    <button
                        className="position-absolute end-50 top-50 translate-middle btn btn-light btn-sm rounded-pill">
                        <FontAwesomeIcon icon={faCamera} size="lg" />
                    </button>

                    <div className="position-absolute  translate-middle " style={{'paddingLeft': '150px'}} >
                        <img className="rounded-circle"
                             style={{"width": "100px", "filter": "brightness(50%)"}}
                             src={"/images/" + profile.profilePicture}/>
                    </div>

                    <button
                        className="position-absolute start-0 top-100
                         translate-middle btn btn-light btn-sm rounded-pill"       style={{marginLeft: "75px"}}>

                        <FontAwesomeIcon icon={faCamera} size="lg" />
                    </button>


                </div>






            </div>




            <form className="p-2">

                <div className="border  rounded-2 p-2 mb-2">
                    <label htmlFor="username">
                        <span className="text-secondary">Name</span>
                    </label>
                    <input id="username" title="Username"
                           className="p-0 form-control border-0 p-2"
                           placeholder="Update name" value={userName}
                           onChange={(event) => setUserName(event.target.value)}/>
                </div>


                <div className="border  rounded-3 p-2 mb-2">
                    <label htmlFor="bio">
                        <span className="text-secondary">Bio</span>
                    </label>

                    <textarea
                        id="bio"
                        className="p-0 form-control border-0 p-2"
                        placeholder="Update your bio"
                        value={bio}
                        onChange={(event) => setBio(event.target.value)}
                    />
                </div>



                <div className="border rounded-3 p-2 mb-2">
                    <label htmlFor="location">
                        <span className="text-secondary">Location</span>
                    </label>
                    <input id="location"
                           className="form-control border-0  "
                           placeholder="Update location"
                           value={location}
                           onChange={(event) => setLocation(event.target.value)}
                    />
                </div>

                <div className="border  rounded-3 p-2 mb-2">
                    <label htmlFor="website">
                        <span className="text-secondary">Website</span>
                    </label>
                    <input id="website"
                           className="p-0 form-control border-0 p-2"
                           placeholder="Update website"
                           value={website}
                           onChange={(event) => setWebsite(event.target.value)}
                    />
                </div>


                <div className="border  rounded-3 p-2 mb-2">
                    <label htmlFor="date-of-birth">
                        <span className="text-secondary">Birth date</span>
                    </label>
                    <input id="date-of-birth"
                           className="p-0 form-control border-0 p-2"
                           type="date"
                           placeholder="Update your birthday"
                           value={birthday}
                           onChange={(event) => setBirthday(event.target.value)}
                    />


                </div>
            </form>
        </div>
    );
};
export default EditProfile;