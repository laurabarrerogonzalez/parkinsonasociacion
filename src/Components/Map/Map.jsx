import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Mapa() {
  const locations = [
    { position: [38.9158620, -6.3290042], info: 'Calle Madre Remedios Rodrigo, s/n, Mérida' },
    { position: [38.8697199, -6.9821739], info: 'Calle Godofredo Ortega y Muñoz, local 5, Badajoz' },
    { position: [39.469544607965865, -6.370549018597867], info: 'Calle La Carrera, 8, Cáceres' },
    { position: [38.9075053198031, -6.625639965973815], info: 'Calle Salzillo, Centro Cultural "El Valle", Montijo' },
    // Agrega más ubicaciones aquí
  ];

  return (
    <MapContainer center={locations[0].position} zoom={8} style={{ height: "70vh", width: "50%", marginLeft: "15px", marginRight: "auto", marginTop: "15px", marginBottom: "15px", border: "2px solid black", boxShadow: "4px 4px 8px rgba(0, 0, 0, 1)"}}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location, index) => (
        <Marker key={index} position={location.position}>
          <Popup>
            {location.info}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default Mapa;