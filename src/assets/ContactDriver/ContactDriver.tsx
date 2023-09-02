import Shield from '../../../public/shieldIcon.svg';
import Phone from '../../../public/phoneIcon.svg';
import ButtonComponent from '../Button/Button';
import styles from './ContactDriver.module.css';

const ContactDriver = () => {

    return (
        <div className={styles.container}>

            <input 
                className={styles.inputSendMessage}
                type='text'
                name='sendMessage'
                id='sendMessage'
                placeholder='Enviar uma mensagem para João...'
            />
        
            <div className={styles.emergencyIcons}>
                
                <ButtonComponent />

                <img 
                    className={styles.phone}
                    src={Phone}
                    alt='icone do celular'
                />
                <img 
                    className={styles.shield}
                    src={Shield}
                    alt='icone do escudo'
                />
            </div>

        </div>
    );
};

export default ContactDriver;