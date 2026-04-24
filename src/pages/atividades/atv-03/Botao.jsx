import styles from './index.module.css';

function Botao({ texto, aoClicar, classe }) {
    return (
        <button 
            className={`${styles.botao} ${styles[classe] || ''}`} 
            onClick={aoClicar}
        >
            {texto}
        </button>
    );
}

export default Botao;