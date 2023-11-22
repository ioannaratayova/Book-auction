import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './ContactUs.css';


const containerStyle = {
    width: '400px',
    height: '400px',
};

const center = {
    lat: 123.456, // Add the latitude of your location
    lng: -12.345, // Add the longitude of your location
};

export const ContactUs = () => {
    return (
        <div className="contact-container">
            <div className="contact-content">
                <div className="contact-info">
                    <h1>Contact Us</h1>
                    <p>
                        <strong>Address:</strong> 29 Ivan Vazov St, Sofia, Bulgaria
                    </p>
                    <p>
                        <strong>Email:</strong> book_auction@gmail.com
                    </p>
                    <p>
                        <strong>Phone:</strong> +1 234 567 890
                    </p>
                </div>

                <div className="map-container">
                    <LoadScript googleMapsApiKey='your_key'>
                        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
                            <Marker position={center} />
                        </GoogleMap>
                    </LoadScript>
                </div>
            </div>
        </div>
    );
};
