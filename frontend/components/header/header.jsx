import React from "react";
import Modal from "../modal/modal";
import GreetingContainer from "../greeting/greeting_container";
import SearchBarContainer from "../search/search_bar_container";
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";

import {clearCampgrounds} from "../../actions/campground_actions";

// const mapStateToProps = (state) => {
//     return {

//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        clearCampgrounds: () => dispatch(clearCampgrounds())
    }
}

const Header = (props) => {

    let headSearchBar;
    if (props.location.pathname === "/" || props.location.pathname.slice(0, 6) === "/users") {
        headSearchBar = <div></div>
    } else {
        headSearchBar = <SearchBarContainer />
    }

    const handleHomepage = (event) => {
        event.preventDefault();
        if (props.location.pathname !== "/") {
            props.clearCampgrounds();
            props.history.push("/")
        }
    }

    return (
        <div className="header-container">
            <Modal />
            <div className="header-icon">
                <img src="https://dripcamp-seed.s3-us-west-1.amazonaws.com/mainlogo.png" onClick={handleHomepage}/>
                {headSearchBar}
            </div>

            
            <div className="header-greeting">
                <GreetingContainer />
            </div>
        </div>
    )

}

export default withRouter(connect(null, mapDispatchToProps)(Header));