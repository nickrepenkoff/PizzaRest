import Image from 'next/image'
import styles from '../../styles/Order.module.css'

const Order = () => {
    const status = 0
    const statusClass = (index) => {
        if(index - status < 1) return styles.done
        if(index - status === 1) return styles.inProgress
        if(index - status > 1) return styles.undone

    }
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.row}>
                    <table className={styles.table}>
                        <tbody>
                        <tr className={styles.trTitle}>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Address</th>
                            <th>Total</th>
                        </tr>
                        <tr className={styles.tr}>
                            <td>
                                <span className={styles.id}>1</span>
                            </td>
                            <td>
                                <span className={styles.name}>John John</span>
                            </td>
                            <td>
                                <span className={styles.address}>Austin, Texas</span>
                            </td>
                            <td>
                                <span className={styles.total}>$39.80</span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.row}>
                    <div className={statusClass(0)}>
                        <Image src='/images/paid.png' width={30} height={30}  alt=''/>
                        <span>Payment</span>
                        <div className={styles.checked__icon}>
                            <Image className={styles.checked__icon} src='/images/checked.png' alt='' width={20} height={20} />
                        </div>
                    </div>
                    <div className={statusClass(1)}>
                        <Image src='/images/bake.png' width={30} height={30}  alt=''/>
                        <span>Preparing</span>
                        <div className={styles.checked__icon}>
                            <Image className={styles.checked__icon} src='/images/checked.png' alt='' width={20} height={20} />
                        </div>
                    </div>
                    <div className={statusClass(2)}>
                        <Image src='/images/bike.png' width={30} height={30}  alt=''/>
                        <span>On the way</span>
                        <div className={styles.checked__icon}>
                            <Image className={styles.checked__icon} src='/images/checked.png' alt='' width={20} height={20} />
                        </div>
                    </div>
                    <div className={statusClass(3)}>
                        <Image src='/images/delivered.png' width={30} height={30}  alt=''/>
                        <span>Delivered</span>
                        <div className={styles.checked__icon}>
                            <Image className={styles.checked__icon} src='/images/checked.png' alt='' width={20} height={20} />
                        </div>
                    </div>
                </div>
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
                    <button disabled className={styles.button}>
                        Paid
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Order;
