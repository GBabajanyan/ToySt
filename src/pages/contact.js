import { useEffect, useState } from "react";
import NavInfo from "../components/general_universal/navInfo";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Map = () => {
    return <GoogleMap zoom={10} center={{ lat: 44, lng: -80 }} mapContainerClassName="w-full min-h-screen"></GoogleMap>
}

const Contact = () => {
    const [headerHeight, setHeaderHeight] = useState(0)
    useEffect(() => {
        setHeaderHeight(document.getElementsByClassName('mainHead')[0].clientHeight)
        window.scrollTo(0,0);

    })

    const { isLoaded } = useLoadScript({ googleMapsApiKey: "AIzaSyA5hovpgVjgPlIVt8b1H0IUVZ9sKchxOwo" });



    return (
        <div className="w-full min-h-screen h-max flex flex-col items-center " style={{ marginTop: headerHeight + 'px' }}>
            <NavInfo />
            <div style={{ height: '100vh', width: '100%' }}>
                {
                    (!isLoaded) ? (<div>Loading...</div>) : null
                }
                <Map />
            </div>
        </div>
    );
}

export default Contact;