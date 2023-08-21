import cardapio from 'data/cardapio.json';
import Item from './Item';
import styles from './Itens.module.scss';
import { useEffect, useState } from 'react';
import { Cardapio } from 'types/Prato';

interface ItensProps {
  busca: string;
  filtro: number | null;
  ordenador: string;
}

export default function Itens(props: ItensProps) {

  const [lista, setLista] = useState(cardapio);

  const { busca, filtro, ordenador } = props; // desestruturação do objeto props

  // Função para TESTAR se o item do cardapio tem o que está sendo buscado (procura no titulo e na descrição)
  function testaBusca(title: string, description: string) {
    const titleRegex = new RegExp(busca, 'i'); // 'i' -> case insensitive
    const descriptionRegex = new RegExp(busca, 'i');
    return titleRegex.test(title) || descriptionRegex.test(description);
  }

  // Função para TESTAR se o item do cardapio tem o filtro selecionado
  function testaFiltro(id: number) {
    if (filtro !== null) return filtro === id;
    return true;
  }

  // Função para ORDENAR a lista de itens do cardapio
  function ordenar(novaLista: Cardapio) {
    switch (ordenador) {
      case 'porcao':
        return novaLista.sort((a, b) => a.size > b.size ? 1 : -1);
      case 'qtd_pessoa':
        return novaLista.sort((a, b) => a.serving > b.serving ? 1 : -1);
      case 'menor_preco':
        return novaLista.sort((a, b) => a.price > b.price ? 1 : -1);
      case 'maior_preco':
        return novaLista.sort((a, b) => a.price > b.price ? -1 : 1);
      case 'a_z':
        return novaLista.sort((a, b) => a.title[0] > b.title[0] ? 1 : -1);
      case 'z_a':
        return novaLista.sort((a, b) => a.title[0] > b.title[0] ? -1 : 1);
      default:
        return novaLista;
    }
  }

  // sempre que a busca ou o filtro atualizar acontece a ação abaixo na lista:
  // o primeiro parametro do useEffect é uma "arrow function" e o segundo é um "array de dependencias"
  useEffect(() => {
    const novaLista = cardapio.filter(item =>
      testaBusca(item.title, item.description) && testaFiltro(item.category.id)
    );
    setLista(ordenar(novaLista));
  }, [busca, filtro, ordenador]);

  return (
    <div className={styles.itens}>
      {lista.map(item => (
        <Item
          key={item.id}
          {...item} //pega todos os objetos do itens.json e passa como props para o componente Item
        />
      ))}
    </div>
  );
}