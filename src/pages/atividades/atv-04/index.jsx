
import { useState } from 'react';
import styles from './index.module.css';

export default function Atividade04() {
    const [produto, setProduto] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [lista, setLista] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!produto || !quantidade) return;

        const novoItem = {
            produto,
            quantidade
        };

        setLista([...lista, novoItem]);

        setProduto('');
        setQuantidade('');
    };

    return (
        <div className={styles.container}>

            <h1>Lista de Compras</h1>

            <form onSubmit={handleSubmit} className={styles.formulario}>
                <input
                    type="number"
                    placeholder='Qtd'
                    value={quantidade}
                    onChange={e => setQuantidade(e.target.value)}
                    className={styles.quantidade}
                />

                <input
                    type="text"
                    placeholder='Nome do produto'
                    value={produto}
                    onChange={e => setProduto(e.target.value)}
                    className={styles.produto}
                />

                
                <button 
                className={styles.button}
                type="submit">Adicionar</button>
            </form>

            <h2>Lista</h2>

            {
                lista.map((item, index) => (
                    <p key={index}>
                        {item.produto} - {item.quantidade}
                    </p>
                ))
            }
        </div>
    );
}