import React, { Component } from "react";
import axios from "axios";
class Video extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Video: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/Video/")
      .then((response) => {
        if (response.data) {
          this.setState({
            Video: response.data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="video-area bg-overlay">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center">
                <h2>{this.state.Video.VideoTitle}</h2>
                <p>{this.state.Video.VideoDescription}</p>
                <a
                  className="play-btn"
                  href={this.state.Video.VideoLink}
                  data-effect="mfp-zoom-in"
                >
                  <i className="fa fa-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Video;
