import styles from '../../../styles/contactanosForm.module.css'

export default function ContactanosForm() {
  return (
    <form className={styles.contacto}>
        <legend>Contactanos</legend>
        <div>
            <div >
                <label htmlFor='nombre'>Tu Nombre:</label>
                <input type='text' value='' id='nombre' />
            </div>
            <div>
                <label htmlFor='email'>Tu Email:</label>
                <input type='email' value='' id='email' />
            </div>
            <div>
                <label htmlFor='asunto'>Asunto:</label>
                <input type='text' value='' id='asunto' />
            </div>
            <div>
                <label htmlFor='mensaje'>Mensaje:</label>
                <textarea rows='6' id='mensaje'></textarea>
            </div>
            <div>
                <input className={styles.submit} type='submit' value='Envia Mensaje' />
            </div>
        </div>
    </form>
  )
}
