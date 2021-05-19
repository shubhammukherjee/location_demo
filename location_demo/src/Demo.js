import React,{ useState } from "react";
import { useEffect } from "react";
import MyMapComponent from './MapComponent'

const Demo = (props) => {
    const [lat , changeLat] = useState(null)
    const [long , changeLong] = useState(null);
    useEffect(() => {

        if(!lat && !long ) {
            navigator.geolocation.getCurrentPosition(function(position) {
                console.log(position,"position")
                changeLat(position.coords.latitude);
                changeLong(position.coords.longitude)
              });
        }
    })
    return (
        <div>
        <div style={{display:'flex',justifyContent: 'space-evenly',marginBottom: '20px'}}>
            <div>
            <label>Latitude</label> <br/>
            <input value={lat} onChange={(e) => changeLat(e.target.value) }/>
            </div>
            <div>
            <label>Longitude</label> <br/>
            <input value={long} onChange={(e) => changeLong(e.target.value) }/>
            </div>
            </div>
           
            <MyMapComponent lat={lat} long={long} />
        </div>

    ) 
}

 export default Demo;


