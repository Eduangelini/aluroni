import React from 'react';
import styles from './Buscador.module.scss';
import { CgSearch } from 'react-icons/cg';

interface BuscadorProps {
  busca: string
  setBusca: React.Dispatch<React.SetStateAction<string>>
}

const Buscador = ({ busca, setBusca }: BuscadorProps) => {
  return (
    <div className={styles.buscador}>
      <input
        value={busca} //o valor do input é o estado busca
        onChange={evento => setBusca(evento.target.value)} //ao digitar algo no input, o estado busca recebe o valor digitado
        placeholder='Buscar'
      />
      <CgSearch
        size={20}
        color='#4c4d5e'
      />
    </div>
  );
};

export default Buscador;