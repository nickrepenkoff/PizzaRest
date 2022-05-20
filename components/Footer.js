import styles from '../styles/Footer.module.css';
import Image from 'next/image'
const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src='/images/bg.png' alt='' layout='fill' objectFit='cover' />
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>
                        FIND OUR RESTAURANTS
                    </h1>
                    <p className={styles.text}>
                        1654 R. Don Road
                        <br/> Los Angeles
                        <br/> 555-666-777
                    </p>
                    <p className={styles.text}>
                        1654 R. Don Road
                        <br/> New York
                        <br/> 555-616-777
                    </p>
                    <p className={styles.text}>
                        1654 R. Don Road
                        <br/> Austin, Texas
                        <br/> 555-999-777
                    </p>
                    <p className={styles.text}>
                        1654 R. Don Road
                        <br/> Miami
                        <br/> 565-676-757
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>
                        Working hours
                    </h1>
                    <p className={styles.text}>
                        Monday - Friday
                        <br/> 9:00 - 22:00
                    </p>
                    <p className={styles.text}>
                        Saturday - Sunday
                        <br/> 12:00 - 24:00
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
