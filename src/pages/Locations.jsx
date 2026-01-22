import image from '../assets/imgLoc.jpg'
function Locations(){
    return(
        <>
        <div>
            <img src={image} alt="cup" className='photo1' />
            <h1> Locations</h1>
            
            <div className='row'> 
        <div>
            <div className="textBox">
                <h1> Downtown</h1>
                <h2> 384 West 4th St</h2>
                <h2>Suite 108</h2>
                <h2>Portland, Maine</h2>
            </div>
        </div>

        <div className="textBox">
            <div>
                <h1>East Bayside</h1>
                <h2>3433 Phisherman's Avenue</h2>
                <h2>NorthWest Corner</h2>
                <h2>Portland, Maine</h2>
            </div>
        </div>

        <div className="textBox">
            <div>
                <h1> Oakdale</h1>
                <h2>515 Crescent Avenue</h2>
                <h2>Second Floor</h2>
                <h2>Portland, Maine</h2>
            </div>
        </div>


        </div>
        </div>
        </>
    )
}
export default Locations;