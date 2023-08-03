import styles from './Cardapio.module.scss'
import { ReactComponent as Logo } from 'assets/logo.svg'


const Cardapio = () => {
  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
    </main>
  )
}

export default Cardapio