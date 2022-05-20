import styles from '../styles/Slider.module.css'
import Image from 'next/image'
import {useState} from "react";

const Slider = () => {
    const [index, setIndex] = useState(0);
    const images = [
        '/images/slider.png',
        '/images/slider-2.png',
        '/images/slider-3.png'
    ]
    const handleArrow = (dir) => {
        if(dir === 'l') {
            setIndex(index !== 0 ? index -1 : 2)
        }
        if(dir === 'r') {
            setIndex(index !== 2 ? index + 1 : 0)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.arrow_container} style={{left: '0'}} onClick={() => handleArrow('l')}>
                <Image src='/images/arrowl.png' alt='left arrow' layout='fill' />
            </div>
            <div className={styles.wrapper} style={{transform: `translateX(${-100*index}vw)`}}>
                {images.map((img, i) => (
                    <div className={styles.image_container} key={i}>
                        <Image src={img} layout='fill' objectFit='contain'/>
                    </div>
                ))}
            </div>
            <div className={styles.arrow_container} style={{right: '0'}} onClick={() => handleArrow('r')}>
                <Image src='/images/arrowr.png' alt='left arrow' layout='fill'/>
            </div>
        </div>
    );
};

export default Slider;
