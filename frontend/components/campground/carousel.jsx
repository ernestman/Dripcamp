import React from "react";

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }

        this.handlePrev = this.handlePrev.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    handlePrev(event) {
        event.preventDefault();
        const carouselSlide = document.querySelector(".carousel-slide")
        const carouselImages = document.querySelectorAll(".img");
        let size = carouselImages[0].clientWidth + 16;
        // debugger
        carouselSlide.style.transition = "transform 0.75s ease-in-out"
        this.setState({ counter: this.state.counter - 1 })
        setTimeout(
            () => {
                // if (carouselImages[counter].id === "last-clone") {
                //     this.setState({ counter: this.state.counter - 2 })
                //     carouselSlide.style.transform = "translateX(" + ((-size * this.state.counter)) + "px)";

                // if (carouselImages[this.state.counter].id === "last-clone") {
                //     carouselSlide.style.transition = "none";
                //     carouselSlide.style.transform = "translateX(" + ((-size * this.state.counter)) + "px)";
                //     this.setState({ counter: carouselImages.length - 2})
                //     carouselSlide.style.transition = "transform 0.75s ease-in-out"
                // }

                if (this.state.counter < 0) {
                    // carouselSlide.style.transition = "none";
                    carouselSlide.style.transform = "translateX(" + ((-size * (this.props.photoUrls.length - 1))) + "px)";
                    this.setState({ counter: this.props.photoUrls.length - 1 });
                    // carouselSlide.style.transition = "transform 0.75s ease-in-out"
                }
                
                else {
                    carouselSlide.style.transform = "translateX(" + ((-size * this.state.counter)) + "px)";
                }
            }, 0
        )
    }

    handleNext(event) {
        event.preventDefault();
        const carouselSlide = document.querySelector(".carousel-slide")
        const carouselImages = document.querySelectorAll(".img");
        let size = carouselImages[0].clientWidth + 25;
        // debugger
        carouselSlide.style.transition = "transform 0.75s ease-in-out"
        // asynchronous
        this.setState({ counter: this.state.counter + 1 })
        // making carouselSlide asynchronous
        setTimeout(
            () => {
                // if (carouselImages[counter].id === "first-clone") {
                //     this.setState({ counter: this.state.counter - 2})
                //     carouselSlide.style.transform = "translateX(" + ((-size * this.state.counter)) + "px)";
                if (this.state.counter >= this.props.photoUrls.length) {
                    // carouselSlide.style.transition = "none";
                    carouselSlide.style.transform = "translateX(" + ((-size * 0)) + "px)";
                    this.setState({ counter: 0});
                    // carouselSlide.style.transition = "transform 0.75s ease-in-out"
                } else {
                    carouselSlide.style.transform = "translateX(" + ((-size * this.state.counter)) + "px)";
                }
            }, 0
        )
    }

    render() {
        const {photoUrls} = this.props;
        // debugger
        return (
            <div className="carousel">
                <div className="carousel-container">
                    <div className="arrows">
                        <div className="prev-button">
                            <button onClick={this.handlePrev} id="prev">&#10094;</button>
                        </div>
                        <div className="next-button">
                            <button onClick={this.handleNext} id="next">&#10095;</button>
                        </div>
                    </div>
                    <div className="carousel-slide">
                        <img src={photoUrls[photoUrls.length - 1]} className="img" id="last-clone" />
                        {photoUrls.map( (url, i) => (<img key={i} className="img" src={url} />))}
                        <img src={photoUrls[0]} className="img" id="first-clone" />
                    </div>
                </div>
        
            </div>
        )

    }
}

export default Carousel;