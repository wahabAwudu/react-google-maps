import React, { Component } from "react";

/* eslint-disable */
class MapHome extends Component {
  coords = [
    { lat: 6.700071, lng: -1.630783 },
    { lat: 5.55602, lng: -0.1969 },
    { lat: 5.7666636, lng: 0.6166642 }
  ];

  renderMap = () => {
    loadScipt(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyB-0TudBN841q0BgO9EaRQlJ8LGI06zr-4&callback=initMap"
    );
    window.initMap = this.initMap;
  };

  initMap = () => {
    new google.maps.Map(document.getElementById("map"), {
      center: { lat: 6.700071, lng: -1.630783 },
      zoom: 14
    });
  };

  createMarker = () => {
    new google.maps.Marker({
      position: coords[0],
      map: this.initMap,
      title: "Hello MAps"
    });
  };

  componentDidMount() {
    this.renderMap();
  }

  render() {
    return (
      <React.Fragment>
        <div className="container" id="map" />
      </React.Fragment>
    );
  }
}

function loadScipt(url) {
  let index = window.document.getElementsByTagName("script")[0];
  let script = window.document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

export default MapHome;
