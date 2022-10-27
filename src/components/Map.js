import { useRef, useEffect, useState } from 'react';
import { Wrapper } from "@googlemaps/react-wrapper";
import './Map.css'


function MyMapComponent({
  center,
  zoom,
}) {
  const ref = useRef();
  useEffect(() => {
      new window.google.maps.Map(ref.current, {
        center,
        zoom,
      });
  });

  return <div className='map' ref={ref} id="map" />;
}

function Map() {
  const [googleMapsApiKey, setGoogleMapsApiKey] = useState(null)
  const center = { lat: -34.90739836206888, lng: 138.60131996814206 };
  const zoom = 12;

  useEffect(() => {
    const fetchGoogleMapsKey = () => fetch('/googleMapsKey')
      .then(res => res.json())
      .then(res => {
        setGoogleMapsApiKey(res)
      })
      fetchGoogleMapsKey()
  }, []);

  if(!googleMapsApiKey) return <div>Loading map</div>

  return (
    <Wrapper apiKey={googleMapsApiKey}>
      <MyMapComponent center={center} zoom={zoom} />
    </Wrapper>
  );
}


export default Map;