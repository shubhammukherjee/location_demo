
const MyMapComponent = (props) =>
 <iframe src={`http://maps.google.com/maps?q=${props.lat},${props.long}&z=16&output=embed`} height="450" width="600"></iframe>

 export default MyMapComponent;



