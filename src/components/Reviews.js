import "../assets/style.css"

const Reviews = () => {



    return ( 
        <>
            <h1>Reviews</h1>
            <div className="reviews">
                <div className="review-saad">
                    <img src="https://cdn.ticketsource.co.uk/brochure-site/images/five-stars.svg"/>
                    <h2><b>Will's Jamboree</b></h2>
                    <h2>Will's jamboree was fire - you need to see him when he's next on tour.</h2>
                    <h3>by Saad A</h3>
                </div>
                <div className="adele">
                <img src="https://cdn.ticketsource.co.uk/brochure-site/images/five-stars.svg"/>

                    <h2>Adele</h2>
                    <h2>Adele was as amazing as I expected her to be - one of the greatest nights of my life. </h2>
                    <h3>by Emma B</h3>
                </div>
                <div className="FleetwoodMac">
                <img src="https://cdn.ticketsource.co.uk/brochure-site/images/five-stars.svg"/>
                    <h2>Fleetwood Mac</h2>
                    <h2>Worth the money - Fleetwood Mac will always be iconic. Singing Everywhere live was a highlight. </h2>
                    <h3>by Anna</h3>
                </div>
            </div>
        </>
        );


}
 
export default Reviews;