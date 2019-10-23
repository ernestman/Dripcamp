import React from "react";
import SearchBarContainer from "../components/search/search_bar_container";
import {Link, withRouter} from "react-router-dom";
import CampgroundIndexContainer from "../components/campground/campground_index_container";
import CampgroundSplashContainer from "../components/campground/campground_splash_container";

const Splash = () => {

    return (
        <div className="splash-container">
            <div className="splash-info">
                <h1 id="splash-head">Find yourself outside.</h1>
                <div id="splash-text">
                    <p>Book unique camping experiences on over <span>300,000</span> campsites, ranches, vineyards, public parks, and more.</p>
                </div>
            </div>
            <SearchBarContainer/>
            {/* <CampgroundIndexContainer/> */}
            <CampgroundSplashContainer />

            <div className="bio-container">
                <div className="bio-img">
                    <img id="ernie-img" src={ernieUrl} />
                </div>
                <div className="bio-info">
                    <h1>Ernie, Software Engineer:</h1>
                    <p>
                    Hi! I'm Ernie, a software engineer with a passion for tackling and
                    solving challenging problems. As a software developer, I
                    have enjoyed utilizing Ruby, Ruby on Rails, Javascript,
                    React / Redux, PostgreSQL, CSS, and HTML5 in my projects.
                    When I'm not coding or building cool things, you can find
                    me at your local 24 playing pickup basketball, or watching
                    the NBA and fanatically cheering for the Golden State
                    Warriors.
                    </p>
                    {/* <div className="bio-link"> */}
                    <a className="bio-link" id="profile-link" href="https://ernestman.github.io/PersonalSite" target="_blank">Learn more</a>
                    {/* </div> */}
                </div>
            </div>
    
            <div className="large-icon-container">
                {/* <h1>Temporary Container for Big Icons</h1> */}
                <div className="large-icon">
                    <img src={window.tentArmsUrl}/>
                    <div className="large-icon-text">
                        <p>Dripcamp empowers people to share their land with campers.</p>
                    </div>
                </div>
                <div className="large-icon">
                    <img src={window.billSunUrl}/>
                    <div className="large-icon-text">
                        <p>Creating sustainable revenue and fostering community</p>
                    </div>
                </div>
                <div className="large-icon">
                    <img src={window.palmEyeUrl}/>
                    <div className="large-icon-text">
                        <p>Unlocking access to incredible new places to camp</p>
                    </div>
                    <Link to="/campgrounds">Discover Dripcamps</Link>
                </div>
            </div>

            

        </div>
    )

}

export default withRouter(Splash);