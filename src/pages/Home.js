import FeaturedArtists from "../components/FeaturedArtists";
import ConcertContainer from "../containers/ConcertContainer";
import ConcertList from "../components/ConcertList";

const  Home = () => {
    return (
    <div>
        <img className ="concertImage" src= {require("../assets/concert.jpg")}></img>
        
        <FeaturedArtists/>
        <h1>SoundStage</h1>
    </div>

    );
}
 
export default Home;