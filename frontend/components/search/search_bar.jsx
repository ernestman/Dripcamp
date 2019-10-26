import React from "react";
import {withRouter} from "react-router-dom";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: ""
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        let input = document.getElementById("search-field");
        let autocomplete = new google.maps.places.Autocomplete(input);

        let address;

        let that = this;
        autocomplete.addListener( "place_changed", () => {
            if (!autocomplete.getPlace().formatted_address) {
                address = autocomplete.getPlace().name;
                that.setState( {address: address} )
                that.handleSubmit();
            } else {
                address = autocomplete.getPlace().formatted_address;
                that.setState( {address: address} );
                that.handleSubmit();
            }
        })
    }

    handleInput(event) {
        this.setState({ address: event.target.value})
    }

    handleSubmit() {
        this.props.clearCampgrounds();
        let latitude;
        let longitude;
        let location = new google.maps.Geocoder();
        location.geocode( { "address": this.state.address }, (results, status) => {
            if (status === "OK") {
                latitude = results[0].geometry.location.lat();
                longitude = results[0].geometry.location.lng();
                this.props.history.push(`/search?lat=${latitude}&lng=${longitude}`)
            } else {
                // san francisco coordinates
                latitude = 37.773972;
                longitude = -122.431297;
                this.props.history.push(`/search?lat=${latitude}&lng=${longitude}`)
            }
        })
    }

    render() {

        const headSearchBar = (this.props.location.pathname === "/" || this.props.location.pathname.slice(0, 6) === "/users") ? (
            <div className="search-bar-container">
                <form className="search-form">
                    <div className="search-with-icon">
                        <i id="search-icon" className="fas fa-search fa-lg"></i>
                        <input
                            id="search-field"
                            className="search-input"
                            type="search"
                            placeholder="Search..."
                            value={this.state.address}
                            onChange={this.handleInput}
                        />
                    </div>
                    <button id="search-button" onClick={this.handleSubmit}>Search</button>
                </form>
            </div>
        ) : (
            <div className="header-search-bar">
                <form className="header-search-form">
                    <div className="header-search">
                        <i id="header-search-icon" className="fas fa-search fa-sm"></i>
                        <input
                            id="search-field"
                            className="header-search-input"
                            type="text"
                            placeholder="Search..."
                            // value={this.state.address}
                            onChange={this.handleInput}
                        />
                    </div>
                    <button id="header-search-button" onClick={this.handleSubmit}></button>
                </form>
            </div>
        )
        
        return (
            <div>
                {headSearchBar}
            </div>
        )


    }



}

export default withRouter(SearchBar);