import Image from 'next/image'
import styles from '../styles/Cart.module.css'

const Cart = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                   <tbody>
                       <tr className={styles.trTitle}>
                           <th>Product</th>
                           <th>Name</th>
                           <th>Extras</th>
                           <th>Price</th>
                           <th>Quantity</th>
                           <th>Total</th>
                       </tr>
                       <tr className={styles.tr}>
                           <td>
                               <div className={styles.image__container}>
                                   <Image src='/images/pizza.png' alt='' layout='fill' objectFit='cover' />
                               </div>
                           </td>
                           <td>
                               <span className={styles.name}>CARBONARA</span>
                           </td>
                           <td>
                               <span className={styles.extras}>Double ingredients, spice sauce</span>
                           </td>
                           <td>
                               <span className={styles.price}>$19.90</span>
                           </td>
                           <td>
                               <span className={styles.quantity}>2</span>
                           </td>
                           <td>
                               <span className={styles.total}>$39.80</span>
                           </td>
                       </tr>
                   </tbody>
                </table>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>
                        CART TOTAL
                    </h2>
                    <div className={styles.total__text}>
                        <b className={styles.total__text_title}>Subtotal:</b>$79.60
                    </div>
                    <div className={styles.total__text}>
                        <b className={styles.total__text_title}>Discount:</b>$0.00
                    </div>
                    <div className={styles.total__text}>
                        <b className={styles.total__text_title}>Total:</b>$79.60
                    </div>
                    <button className={styles.button}>
                        CHECKOUT YOUR ORDER
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
