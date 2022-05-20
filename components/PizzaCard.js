import styles from '../styles/PizzaCard.module.css'
import Image from 'next/image'
const PizzaCard = () => {
    return (
        <div className={styles.container}>
            <Image src="/images/pizza.png" alt='pizza' width="500" height={500}/>
            <h1 className={styles.title}>
                Margarita
            </h1>
            <span className={styles.price}>
                $19.90
            </span>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
        </div>
    );
};

export default PizzaCard;
