import styles from './TitleDriver.module.css';

const TitleDriver = () => {

    return (

        <div>

            <h1 className={styles.title}>
                Encontre <span>João Victor</span> no local de partida
            </h1>

            <p className={styles.subtitle}>
                Chega em 5 minutos (1 km).
            </p>
        </div>
    );
};

export default TitleDriver;