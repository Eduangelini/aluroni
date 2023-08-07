import { useState } from 'react'
import styles from './Ordenador.module.scss'
import opcoes from './opcoes.json'
import classNames from 'classnames'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

interface OrdenadorProps {
  ordenador: string;
  setOrdenador: React.Dispatch<React.SetStateAction<string>>;
}

export default function Ordenador({ ordenador, setOrdenador }: OrdenadorProps) {

  const [aberto, setAberto] = useState(false) //estado para saber se o dropdown está aberto ou não

  const nomeOrdenador = ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome //se o estado ordenador for vazio, ele mostra "Ordenar Por", se não, ele mostra o nome da opção selecionada

  return (
    <button
      className={classNames({
        [styles.ordenador]: true, // true => sempre adiciona a classe ordenador
        [styles['ordenador--ativo']]: ordenador !== '', // se o estado ordenador for diferente de vazio, ele adiciona a classe ativo, se não, não adiciona
      })}
      onClick={() => setAberto(!aberto)} //ao clicar no dropdown, ele abre, se já estiver aberto, ele fecha
      onBlur={() => setAberto(false)} //ao clicar fora do dropdown, ele fecha
    >
      <span>{nomeOrdenador || "Ordenar Por"}</span>
      {aberto ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
      {/*se o dropdown estiver aberto, ele mostra a seta para cima, se não, mostra a seta para baixo*/}

      <div className={classNames({
        [styles.ordenador__options]: true,
        [styles['ordenador__options--ativo']]: aberto,
      })}>
        {/*se o dropdown estiver aberto, ele adiciona a classe ativo, se não, não adiciona*/}

        {opcoes.map((opcao) => (
          <div
            key={opcao.value}
            className={styles.ordenador__option}
            onClick={() => setOrdenador(opcao.value)} //ao clicar em uma opção, o estado ordenador recebe o valor da opção
          >
            {opcao.nome}
          </div>
        ))}
      </div>
    </button>
  )
}