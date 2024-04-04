import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { faBlog, faMusic, faPlane, faSpoon, faWeight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const highlightLocations = [
    {
        latlong: [11.317672897338083, 106.09275270467124],
        description: "House of Governor Nguyen Van Kien"
    }, {
        latlong: [16.461109, 107.570183],
        description: "Huế, Thua Thien Hue, Vietnam",
        image: "https://lh3.googleusercontent.com/p/AF1QipNp5Wt28b0ptaQh4_6MOu7Dg8KKxzf9y6xqC9TP=s680-w680-h510"
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
    },
    {
        latlong: [9.1769, 105.1505],
        description: "Ca Mau, Viet Nam"
    },
    {
        latlong: [10.2891, 103.9840],
        description: "Bangkok, Thailand"
    }
]
const About = () => {
    return (
        <div className="">
            <div className="container mx-auto">
                {/* Introduction Section */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold mb-4">About Me</h2>
                    <p>
                    <span className="mr-2 text-xl font-bold text-blue-500">&#8226;</span> My name is <span className="font-bold">Lincoln Tran</span>, and I was born on <span className="font-bold">September 7th, 1997</span> in <span className="font-bold">Vietnam</span>, where I spent my formative years and received my education. From a young age, I developed a keen interest in technology and problem-solving, which eventually led me to pursue a career as a <span className="font-bold">Software Engineer</span>.
                    </p>
                    <p>
                    <span className="mr-2 text-xl font-bold text-blue-500">&#8226;</span> With more than <span className="font-bold">3 years of experience</span> designing, testing, and developing software solutions, I've honed my skills in delivering innovative business solutions. My <span className="font-bold">in-depth understanding of software architecture technologies</span> allows me to tackle complex challenges and provide effective solutions.
                    </p>
                    <p>
                    <span className="mr-2 text-xl font-bold text-blue-500">&#8226;</span> What sets me apart is my ability to thrive in <span className="font-bold">fast-paced, high-energy, and deadline-driven environments</span>. I'm a <span className="font-bold">meticulous</span> professional who takes pride in my work and is always willing to take on additional tasks to ensure project success. Collaboration and effective communication are key strengths of mine, enabling me to work seamlessly with cross-functional teams.
                    </p>
                </section>

                {/* Travel Section */}
                <section className="mb-20">
                    <div className="title_header flex items-center">
                        <h2 className="text-3xl font-bold mb-4">
                            My Travel Adventures
                            <FontAwesomeIcon icon={faPlane} style={{ marginLeft: '8px' }} />
                            <FontAwesomeIcon icon={faPlane} style={{ marginLeft: '8px' }} />
                            <FontAwesomeIcon icon={faPlane} style={{ marginLeft: '8px' }} />
                        </h2>
                    </div>
                    <p>
                    <span className="mr-2 text-xl font-bold text-blue-500">&#8226;</span> While my passion for software engineering drives me professionally, my love for travel and exploring new cultures is equally profound. From a young age, I've been fascinated by the world's diversity and have seized every opportunity to embark on incredible journeys.
                    </p>
                    <p>
                    <span className="mr-2 text-xl font-bold text-blue-500">&#8226;</span> My travels have taken me to some of the most breathtaking destinations across the globe, each offering a unique perspective and enriching my life with unforgettable experiences. Join me as I reminisce about the places I've visited and the adventures I've embarked upon.
                    </p>
                    <div style={{ height: '700px' }}>
                        {/* Travel Map Component */}
                        <MapContainer center={[16.461109, 107.570183]} zoom={5} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {highlightLocations.map((location) => (
                                <>
                                    <Marker position={location.latlong}>
                                        <Popup>
                                            <div>
                                                <h3>{location.description}</h3>
                                                {location.image && <img src={location.image} alt={location.description} style={{ maxWidth: '200px' }} />}
                                            </div>
                                        </Popup>
                                    </Marker>
                                </>
                            ))}
                        </MapContainer>
                    </div>
                </section>
                <div className="title_header flex items-center">
                        <h2 className="text-3xl font-bold mb-4">
                            My Music Adventures
                            <FontAwesomeIcon icon={faMusic} style={{ marginLeft: '8px' }} />
                            <FontAwesomeIcon icon={faMusic} style={{ marginLeft: '8px' }} />
                            <FontAwesomeIcon icon={faMusic} style={{ marginLeft: '8px' }} />
                        </h2>
                </div>
                <div className="title_header flex items-center">
                        <h2 className="text-3xl font-bold mb-4">
                            My GYM Adventures
                            <FontAwesomeIcon icon={faWeight} style={{ marginLeft: '8px' }} />
                            <FontAwesomeIcon icon={faWeight} style={{ marginLeft: '8px' }} />
                            <FontAwesomeIcon icon={faWeight} style={{ marginLeft: '8px' }} />
                        </h2>
                </div>
                <div className="title_header flex items-center">
                        <h2 className="text-3xl font-bold mb-4">
                            My Blogs Adventures
                            <FontAwesomeIcon icon={faBlog} style={{ marginLeft: '8px' }} />
                            <FontAwesomeIcon icon={faBlog} style={{ marginLeft: '8px' }} />
                            <FontAwesomeIcon icon={faBlog} style={{ marginLeft: '8px' }} />
                        </h2>
                </div>
            </div>
        </div>);
};

export default About;
