import a from '../assets/foodImages/berryblitz.jpg'
import b from '../assets/foodImages/spicedRum.jpg'
import c from '../assets/foodImages/imgDonut.jpg'
import d from '../assets/foodImages/myrtleAve.jpg'
import e from '../assets/foodImages/bedfordBizarre.jpg'
import styles from '../styles/Teas.module.css'

function Teas(){
    return(
        <>
        <h1> Tea Of The Month</h1>
        <h4> What's Steeping at The Tea Cozy?</h4>

        <div>
                
                <div className={styles.galleryContainer}>  

        <div> 
            <div className={styles.image}>
                <h4> Fall Berry Blitz Tea</h4>
                <img src={a} alt="imag" className={styles.imag1}/>
            </div>
        </div>


        <div> 
            <div className={styles.image}>
                <h4> Spiced Rum Tea</h4>
                <img src={b} alt="imag" className={styles.imag2}/>
            </div>
        </div>


        <div> 
            <div className={styles.image}>
                <h4> Sesonal Donuts</h4>
                <img src={c} alt="imag" className={styles.imag3}/>
            </div>
        </div>


        <div> 
            <div className={styles.image}>
                <h4> Myrtle Ave Tea</h4>
                <img src={d} alt="imag" className={styles.imag4}/>
            </div>
        </div>


        <div> 
            <div className={styles.image}>
                <h4> Bedford Bizarre Tea</h4>
                <img src={e} alt="imag" className={styles.imag5}/>
            </div>
        </div>

        </div>
        </div>
        
        </>
    )
}
export default Teas;