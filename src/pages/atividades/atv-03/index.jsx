import { useState } from 'react';
import Botao from './Botao';
import styles from './index.module.css';

function Atividade3 () {
    const [acao, setAcao] = useState('');

    const Cadastrar = () => setAcao('Cadastrar');
    const Editar = () => setAcao('Editar');
    const Listar = () => setAcao('Listar');
    const Excluir = () => setAcao('Excluir');
    const Cancelar = () => setAcao('Cancelar');

    return (
        <div className={styles.container}>
            <h1>Exemplo 4 - Uso de componentes</h1>
            <h2>Ação Selecionada: {acao}</h2>

            <Botao texto="Cadastrar" aoClicar={Cadastrar} classe="cadastrar" />
            <Botao texto="Editar" aoClicar={Editar} classe="editar" />
            <Botao texto="Listar" aoClicar={Listar} classe="listar" />
            <Botao texto="Excluir" aoClicar={Excluir} classe="excluir" />
            <Botao texto="Cancelar" aoClicar={Cancelar} classe="cancelar" />
        </div>
    );
}

export default Atividade3;