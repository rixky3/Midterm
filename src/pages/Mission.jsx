import image from '../assets/background.jpg'
import styles from '../styles/Mission.module.css'

function Mission(){
    return(
        <>
        <div> 
        <img src={image} alt="tea" className='backImage' />
        <div className={styles.mission}>
            <h2> Our Mission</h2>
            <h4> Handpicked, Artisanally curated, Free Rahge, Sustainable, Small Batch, Fair Trade, Organic Tea</h4>
        </div>

        </div>
        </>
    )
}
export default Mission;