import styles from '../styles/PizzaList.module.css'
import PizzaCard from "./PizzaCard";


const PizzaList = () => {
    const fakeApi = [1, 2, 3, 4, 5, 6]
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                THE BEST PIZZA IN THE CITY
            </h1>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae debitis dolores, eveniet fugiat.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae debitis dolores, eveniet fugiat.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae debitis dolores, eveniet fugiat.
            </p>
            <div className={styles.wrapper}>
                {fakeApi.map(pizzaCard => (
                    <PizzaCard key={pizzaCard}/>
                ))}
            </div>
        </div>
    );
};

export default PizzaList;
