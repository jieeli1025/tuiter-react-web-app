import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLink, faLocationDot, faBirthdayCake, faCalendarAlt, faArrowLeft} from '@fortawesome/free-solid-svg-icons';


const ProfileComponent = () => {
    const profile = useSelector(state => state.profile)
    return (
        <div className="profile">
            <div className="border">



                <div className="row">
                    <div className="col-2 mt-1">
                        <FontAwesomeIcon icon={faArrowLeft} className = "ms-4 mt-4 "/>

                    </div>
                    <div className="col-10 mt-2">
                        <div className="row ">
                        <h5 className="fw-bold">
                            {profile.username}
                        </h5>
                        <h5 className="text-secondary ">
                            {profile.tuitCount + ' Tuits'}
                        </h5>
                        </div>
                    </div>
                </div>




                <div className="mb-5 position-relative">
                    <img className="w-100" src={"/images/" + profile.bannerPicture} height='300px'/>
                    <div className="rounded-circle w-100 " height = "20px"> </div>
                    <div className="position-absolute" style={{'top':'250px', 'left':'20px'}} >
                        <img className="rounded-circle" style={{'width': '100px', 'zIndex': '10', 'top':'250px', 'left':'20px'}}
                             src={"/images/" + profile.profilePicture}/>
                    </div>
                    <Link to="/tuiter/edit-profile"
                          style={{'right':'0px', 'left':'300px'}}
                          className=" position-absolute mt-2 me-2 btn btn-large btn-light border border-secondary fw-bolder rounded-pill ">
                        Edit profile
                    </Link>
                </div>




                <div className="p-3" >
                    <h5 className="fw-bold">
                        {profile.username}
                    </h5>
                    <h6 className=" text-secondary">
                        {profile.handle}
                    </h6>
                    <p className="pt-2">
                        {profile.bio}
                    </p>



                    <p className="w-100">
                        <FontAwesomeIcon icon={faLink} className="text-secondary" />
                        <a href={profile.website} title={profile.website} className=" me-1 text-decoration-none">
                            Website
                        </a>
                        <FontAwesomeIcon icon={faLocationDot} className="ms-2 me-1 text-secondary" />
                        <span className="text-secondary">{profile.location}</span>
                        <FontAwesomeIcon icon={faBirthdayCake} className="ms-2 me-1  text-secondary" />
                        <span className="text-secondary">{"Born " + profile.dateOfBirth}</span>
                        <FontAwesomeIcon icon={faCalendarAlt} className="ms-2 me-1 text-secondary" />
                        <span className="text-secondary">{"Joined " + profile.dateJoined}</span>
                    </p>


                    <b >{profile.followingCount}</b> <span className="text-secondary me-4">Following</span>
                    <b >{profile.followersCount}</b> <span className="text-secondary">Followers</span>
                </div>

            </div>
        </div>
    );

}
export default ProfileComponent;