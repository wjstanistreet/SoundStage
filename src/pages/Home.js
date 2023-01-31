import ConcertContainer from "../containers/ConcertContainer";

const  Home = () => {
    return (
    <div>
        <div className="hero"></div>
        {/* <img className ="concertImage" src= {require("../assets/concert.jpg")}></img>  */}
        <ConcertContainer/>
    </div>

    );
}
 
export default Home;