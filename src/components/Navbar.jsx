import styles from '../styles/Navbar.modules.css'
import image from '../assets/logo.png'
function Navbar(){
    return(
        <>
        <nav className={styles.navbar}>
        <img src={image} alt="logo" />
        <ul className={styles.ul}>
            <li> Mission </li>
            <li> Featured Tea </li>
            <li> Locations </li>
        </ul>
        </nav>
        <hr/>
        </>
    )
}
export default Navbar;