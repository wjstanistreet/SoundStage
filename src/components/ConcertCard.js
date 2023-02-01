
const ConcertCard = ({concert}) => {
    
    const imagesArray = [{"artistName" : "Tupac", "imgUrl" : "/Tupac.jpg"}]; function grabImage(inputArtist) {

    let object = imagesArray.find((imgObject)=>{
        if(imgObject.artistName == inputArtist){
            return imgObject
        }

    
    }); 
      

    if (object === undefined){
        object={"imgUrl" : "https://placebear.com/200/200"}
    }

    return object.imgUrl; 

}

// {require("../assets/Tupac.jpg")}
    
    return ( 
    <div className="concertCard">
     <img src={grabImage(concert.artist)}></img>
    <h2><b> {concert.artist}</b></h2>
    <p><b> Date:</b> {concert.date}</p>
    <p><b> Time:</b> {concert.time}</p>
    <p><b>Ticket Price:</b> £{concert.ticketPrice}</p>
    <p><b>Venue Capacity:</b> {concert.capacity}</p>
    <div>
        <p><b>Location:</b> London</p>
    </div>
    </div> );
}
 
export default ConcertCard;