import React from "react";
import CampgroundIndexItem from "./campground_index_item";
import {Link} from "react-router-dom";

class CampgroundIndex extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        this.props.fetchCampgrounds();
    }
    
    render() {
        const {campgrounds} = this.props;

        const campgroundsIndex = campgrounds.map( campground => (      
            <CampgroundIndexItem
                key={campground.id}
                campground={campground}
            />
        ))

        return (
            <div className="campground-index-container">
                <h1 id="index-title">Discover Campgrounds</h1>
                <div className="campground-index-main">
                    {campgroundsIndex}
                </div>
            </div>
        )
    }

}

export default CampgroundIndex;