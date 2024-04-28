import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        description: "Da Nang, Vietnam",
        image: "https://www.shutterstock.com/image-photo/aerial-view-golden-bridge-lifted-600nw-1343264873.jpg"

    },
    {
        latlong: [22.356464, 103.873802],
        description: "Sa Pa, Lào Cai, Vietnam"
    },
    {
        latlong: [15.5394, 108.0191], // Quảng Nam, Hội An
        description: "Quảng Nam, Hội An, Vietnam"
    },
    {
        latlong: [15.1214, 108.8044], // Quảng Ngãi
        description: "Quảng Ngãi, Vietnam"
    },
    {
        latlong: [13.8079, 108.1094], // Quảng Ngãi
        description: "Gia Lai, Vietnam"
    },
    {
        latlong: [14.3497, 108.0005], // Quảng Ngãi
        description: "Kon Tum, Vietnam"
    },
    {
        latlong: [13.947536, 109.322327], // Bình Định
        description: "Bình Định, Vietnam"
    },
    {
        latlong: [13.088186, 109.294844], // Phú Yên
        description: "Phú Yên, Vietnam"
    },
    {
        latlong: [11.940419, 108.458313], // Đà Lạt
        description: "Đà Lạt, Vietnam"
    },
    {
        latlong: [12.238791, 109.196748], // Nha Trang
        description: "Nha Trang, Vietnam"
    },
    {
        latlong: [10.933331, 108.100014], // Phan Thiết
        description: "Phan Thiết, Vietnam"
    },
    {
        latlong: [10.776889, 106.700859], // Hồ Chí Minh
        description: "Hồ Chí Minh, Vietnam"
    },
    {
        latlong: [11.607470, 108.864449], // Ninh Thuận
        description: "Ninh Thuận, Vietnam"
    },
    {
        latlong: [11.020780, 107.169968], // Đồng Nai
        description: "Đồng Nai, Vietnam"
    },
    {
        latlong: [11.541750, 106.883240], // Bình Phước
        description: "Bình Phước, Vietnam"
    },
    {
        latlong: [10.353000, 106.360977], // Tiền Giang
        description: "Tiền Giang, Vietnam"
    },
    {
        latlong: [9.948941, 106.345335], // Trà Vinh
        description: "Trà Vinh, Vietnam"
    },
    {
        latlong: [10.035870, 105.722236], // Kiên Giang
        description: "Kiên Giang, Vietnam"
    },
    {
        latlong: [10.664372, 106.299156], // Long An
        description: "Long An, Vietnam"
    },
    {
        latlong: [12.242460, 108.441933], // Đăk Lăk
        description: "Đăk Lăk, Vietnam"
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
    const [posts, setPosts] = useState([]);
    const accessToken = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN;

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,username,timestamp,caption&access_token=${accessToken}`);
                setPosts(response.data.data);
            } catch (error) {
                console.error('Error fetching posts:', error.message);
                toast.error('Error fetching posts ' + error.message);
            }
        };

        fetchPosts();
    }, [accessToken]);
    const [showFullCaption, setShowFullCaption] = useState(true);

    const toggleCaption = () => {
        setShowFullCaption(prev => !prev);
    };
    return (
        <div className="pt-20">
            <div className="container mx-auto">
                {/* Introduction Section */}
                <section className="mb-20">
                    <h2 className="title_header text-3xl font-bold mb-4">About Me</h2>
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
                {/* Instagram blog Section */}
                <section className="mb-20">
                    <div className="title_header flex items-center">
                        <h2 className="text-3xl font-bold mb-4">
                            My Instagram Daily Posts
                            <FontAwesomeIcon icon={faInstagram} style={{ marginLeft: '8px' }} />
                            <FontAwesomeIcon icon={faInstagram} style={{ marginLeft: '8px' }} />
                            <FontAwesomeIcon icon={faInstagram} style={{ marginLeft: '8px' }} />
                        </h2>
                    </div>
                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {posts.map(post => (

                                <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <img src={post.media_url} alt={post.caption} className="w-full" />
                                    <div className="p-4">
                                        <p className="text-gray-700 text-sm mb-2">
                                            Posted by: <span className="font-bold">{post.username}</span>
                                        </p>
                                        <p className="text-gray-700 text-sm mb-2">
                                            Time: {new Date(post.timestamp).toLocaleString()}
                                        </p>
                                        <div>
                                            {
                                                post.caption.length > 100 ? (
                                                    <div>
                                                        {
                                                            showFullCaption ? (
                                                                <div><p className="text-gray-800">{`${post.caption.slice(0, 100)}...`}</p>
                                                                <span className="text-blue-500 cursor-pointer" onClick={toggleCaption}>
                                                                    Read more
                                                                </span></div>
                                                            ) : (<div>
                                                                <p className="text-gray-800">{post.caption}</p>
                                                                <span className="text-blue-500 cursor-pointer" onClick={toggleCaption}>
                                                                    Show Less
                                                                </span>
                                                            </div>)
                                                        }
                                                    </div>

                                                ) :
                                                    (<p className="text-gray-800">{post.caption}</p>)

                                            }
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
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
            </div>
            <ToastContainer />
        </div>);
};

export default About;
