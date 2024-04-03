import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const highlightLocations = [
    {
        latlong: [11.317672897338083, 106.09275270467124],
        description: "House of Governor Nguyen Van Kien"
    }, {
        latlong: [16.461109, 107.570183],
        description: "Huế, Thua Thien Hue, Vietnam"
    },
    {
        latlong: [21.033333, 105.849998],
        description: "Hanoi, Hoan Kiem District, Hanoi, Vietnam"
    },
    {
        latlong: [16.047079, 108.206230],
        description: "Da Nang, Vietnam"
    },
    {
        latlong: [22.356464, 103.873802],
        description: "Sa Pa, Lào Cai, Vietnam"
    },
    {
        latlong: [9.824959, 105.125893],
        description: "Kien Giang, Vietnam"
    },
    {
        latlong: [13.736717, 100.523186],
        description: "Bangkok, Thailand"
    }
]
const About = () => {
    return (
        <div className="pt-20">
            <div className="container mx-auto">
                <div className="title_header flex items-center">
                    <h1>
                        <span className="pr-1 text-black"></span>What places I tripped
                        <FontAwesomeIcon icon={faPlane} style={{ marginLeft: '8px' }} />
                        <FontAwesomeIcon icon={faPlane} style={{ marginLeft: '8px' }} />
                        <FontAwesomeIcon icon={faPlane} style={{ marginLeft: '8px' }} />
                    </h1>
                </div>
                <div style={{ height: '700px' }}>
                    <MapContainer center={[16.461109, 107.570183]} zoom={5} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {highlightLocations.map((location) => (
                            <>
                                <Marker position={location.latlong}>
                                    <Popup>
                                        {location.description}
                                    </Popup>
                                </Marker>
                            </>
                        ))}
                    </MapContainer>
                </div>
            </div>
        </div>

    );
}

export default About;
