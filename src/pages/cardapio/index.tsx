import { useState } from 'react';
import Buscador from './Buscador';
import styles from './Cardapio.module.scss';
import Filtros from './Filtros';
import Ordenador from './Ordenador';
import Itens from './Itens';



const Cardapio = () => {
  const [busca, setBusca] = useState(''); //estado para saber o que está sendo buscado, se nada, o valor é vazio "('')"

  const [filtro, setFiltro] = useState<number | null>(null); //estado para saber qual filtro está selecionado, se nenhum, o valor é nulo

  const [ordenador, setOrdenador] = useState(''); //estado para saber qual ordenador está selecionada, se nenhuma, o valor é vazio "('')"


  return (
    <section className={styles.cardapio}>
      <h3 className={styles.cardapio__titulo}>Cardápio</h3>
      <Buscador
        busca={busca}
        setBusca={setBusca}
      />
      <div className={styles.cardapio__filtros}>
        <Filtros
          filtro={filtro}
          setFiltro={setFiltro}
        />
        <Ordenador
          ordenador={ordenador}
          setOrdenador={setOrdenador}
        />
      </div>
      <Itens
        busca={busca}
        filtro={filtro}
        ordenador={ordenador}
      />
    </section>
  );
};

export default Cardapio;