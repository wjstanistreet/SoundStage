import "../assets/style.css";

const FeaturedArtists = () => {
    return(
        <>
            <h1>Featured Artists</h1>
            <div className="featured-artists">
                <div className="tupac">
                    <img src="./Tupac.jpg"/>
                    <h2>Tupac</h2>
                </div>
                <div className="adele">
                    <img src="./Adele.jpg"/>
                    <h2>Adele</h2>
                </div>
                <div className="FleetwoodMac">
                    <img src="./FleetwoodMac.jpg"/>
                    <h2>Fleetwood Mac</h2>
                </div>
            </div>
        </>
    )


}

export default FeaturedArtists;