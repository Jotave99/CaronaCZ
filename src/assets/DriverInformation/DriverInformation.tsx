import styles from './DriverInformation.module.css';
import personPhoto from '../../../public/personPhoto.svg';
import star from '../../../public/star.svg';
import car from '../../../public/car.svg';

const DriverInformation = () => {

    return (

        <div className={styles.container}>
            <div className={styles.iconsDriverCar}>
                <div className={styles.driverIcon}>
                    <img 
                        className={styles.personPhoto}
                        src={personPhoto}
                        alt='Foto pessoal'
                    />

                    <div className={styles.driverPhotoAndScore}>
                        <div className={styles.driverScore}>
                            <img
                                src={star}
                                alt='Icone das estrelas'
                            />
                            5.0
                        </div>
                    </div>
                    <p className={styles.driverName}>Bóris C.</p>
                </div>
                <img
                    className={styles.car}
                    src={car}
                    alt='Icone do carro'
                />
            </div>
            <div className={styles.carInformations}>
                <h1 className={styles.carId}>BCD0D19</h1>
                <h5 className={styles.carType}>Honda Civic Roxo</h5>
            </div>
        </div>
    );
};

export default DriverInformation;