const ConcertCard = ({concert}) => {
    
    const imagesArray = 
    [{"artistName" : "Tupac", "imgUrl" : "/Tupac.jpg"},
     {"artistName" : "Adele", "imgUrl" : "/Adele.jpg"}, 
     {"artistName" : "Fleetwood Mac", "imgUrl" : "/FleetwoodMac.jpg"}, 
     {"artistName" : "Billy Joel", "imgUrl" : "/BillyJoel.jpg"},
      {"artistName" : "Kendrick Lamar", "imgUrl" : "/KendrickLamar.jpg"},
       {"artistName" : "Fredo", "imgUrl" : "/Fredo.jpeg"},
       {"artistName" : "Alestorm", "imgUrl" : "/Alestorm.jpeg"},
       {"artistName" : "Will's Jamboree", "imgUrl" : "Will.jpg"} ,
       {"artistName" : "Eminem", "imgUrl" : "Eminem.jpg"},
       {"artistName" : "Lizzo", "imgUrl" : "/Lizzo.jpg"}, 
    {"artistName" : "Track 2", "imgUrl" : "/TRack2.png"}, 
{"artistName" : "Saad's Jamboree", "imgUrl" : "/Saad.jpeg"} ]; function grabImage(inputArtist) {

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