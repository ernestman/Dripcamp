import React from "react";
import {Link} from "react-router-dom";

const CampgroundInfo = (props) => {

    const { campground, hostImgUrl } = props;

    return (
        <div className="show-info">
            <div className="info-top">
                <Link to="/campgrounds">{campground.location}</Link>
                <div className="info-head">
                    <h1>{campground.name} </h1>
                    <i id="check-icon" className="fas fa-check-circle"></i>
                </div>
                <div>
                    <p id="item-rating"><i className="fas fa-thumbs-up"></i> {campground.rating}% <span>Recommended</span></p>
                </div>
            </div>
            <div className="info-bottom">
                <div className="show-user-icon">
                    <img id="host-icon-img"src={hostImgUrl}/>
                </div>
                <h3>Hosted by {campground.host.first_name} {campground.host.last_name[0]}.</h3>
                <p>{campground.description}</p>
            </div>
        </div>
    )

}

export default CampgroundInfo;