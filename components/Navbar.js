import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callBtn}>
                    <Image src='/images/telephone.png' alt='telephone' width='32' height='32' />
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>Order now!</div>
                    <div className={styles.text}>555-666-777</div>
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.list__item}>Homepage</li>
                    <li className={styles.list__item}>Products</li>
                    <li className={styles.list__item}>Menu</li>
                    <Image src='/images/logo.png' alt='logo' width='160' height='69'/>
                    <li className={styles.list__item}>Events</li>
                    <li className={styles.list__item}>Blog</li>
                    <li className={styles.list__item}>Contact</li>
                </ul>
            </div>
            <div className={styles.item}>
                <div className={styles.cart}>
                    <Image src='/images/cart.png' alt='logo' width='30' height='30'/>
                    <div className={styles.quantity}>2</div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
