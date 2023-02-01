const FeaturedArtists = ({concert}) => {
    
    const imagesArray = [{"artistName" : "Tupac", "imgUrl" : "/Tupac.jpg"}, 
                        {"artistName" : "Adele", "imgUrl" : "/Adele.jpg"}, 
                        {"artistName" : "FleetwoodMac", "imgUrl" : "/FleetwoodMac.jpg"}
                        ];

    function grabImage(inputArtist) {
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


return(<div>
    
</div>
    )
    
    
    //     let object = imagesArray.map((imgObject) => {
    //     return ( 
    //         <div className="concertCard">
    //          <img src={grabImage(concert.artist)}></img>
    //         <div>
    //             <p><b>Location:</b> London</p>
    //         </div>
    //         </div> );

    
    // }); 
      


}

// {require("../assets/Tupac.jpg")}
    

// }
 
export default FeaturedArtists;