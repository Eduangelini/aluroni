import React from 'react'
import filtros from './filtros.json'
import styles from './Filtros.module.scss'
import classNames from 'classnames';

type IOpcao = typeof filtros[0];

interface FiltrosProps {
  filtro: number | null
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filtros({ filtro, setFiltro }: FiltrosProps) {

  function selecionarFiltro(opcao: IOpcao) {
    if (filtro === opcao.id) return setFiltro(null);
    return setFiltro(opcao.id);
  } //se o estado filtro for igual ao id da opção, ele recebe o valor nulo, se não, ele recebe o id da opção

  return (
    <div className={styles.filtros}>
      {filtros.map((opcao) => (
        <button
          className={classNames({
            [styles.filtros__filtro]: true, // true => sempre adiciona a classe filtro
            [styles['filtros__filtro--ativo']]: filtro === opcao.id // se o estado filtro for diferente de vazio, ele adiciona a classe ativo, se não, não adiciona
          })}
          key={opcao.id}
          onClick={() => selecionarFiltro(opcao)} //ao clicar em uma opção, o estado filtro recebe o valor da opção
        >
          {opcao.label}
        </button>
      ))}
    </div>
  )
}