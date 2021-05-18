import React from "react";
import { geolocated } from "react-geolocated";
import MyMapComponent from './MapComponent'

class Demo extends React.Component {
  state = {
        lat : null,
        long : null
    }

    componentDidUpdate(prevProps) {
        if(prevProps.coords !== this.props.coords)
        this.setState({
            lat : this.props.coords.latitude,
            long : this.props.coords.longitude
        })
    }

    render() {
        const {lat,long} = this.state
        return !this.props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
        ) : this.props.coords ? (
            <div>
            <div style={{display:'flex',justifyContent: 'space-evenly',marginBottom: '20px'}}>
                <div>
                <label>Latitude</label> <br/>
                <input value={lat} onChange={(e) => this.setState({lat:e.target.value}) }/>
                </div>
                <div>
                <label>Longitude</label> <br/>
                <input value={long} onChange={(e) => this.setState({long:e.target.value}) }/>
                </div>
                </div>
               
                <MyMapComponent lat={this.state.lat} long={this.state.long} />
            </div>

        ) : (
            <div>Getting the location data&hellip; </div>
        );
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Demo);


