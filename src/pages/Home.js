import FeaturedArtists from "../components/FeaturedArtists";
import ConcertContainer from "../containers/ConcertContainer";
import ConcertList from "../components/ConcertList";
import Reviews from "../components/Reviews";
import Sponsors from "../components/Sponsors";

const  Home = () => {
    return (
    <div>
        <img className ="concertImage" src= {require("../assets/concert.jpg")}></img>
        
        <h1>SoundStage</h1>
        <FeaturedArtists/>
        <Reviews/>
        <Sponsors/>
    </div>

    );
}
 
export default Home;