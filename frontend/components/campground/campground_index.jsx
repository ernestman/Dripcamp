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
                <h1 id="index-title">Discover Camping</h1>
                <h3 id="index-text">Find your next destination:</h3>
                <div className="campground-index-main">
                    {campgroundsIndex}
                    <i aria-hidden="true" className="filler-item"></i>
                    <i aria-hidden="true" className="filler-item"></i>
                    {/* <i aria-hidden="true" className="filler-item"></i> */}
                </div>
            </div>
        )
    }

}

export default CampgroundIndex;