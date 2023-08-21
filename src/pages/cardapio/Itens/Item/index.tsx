import styles from './Item.module.scss';
import TagsPrato from 'components/TagsPrato';
import { useNavigate } from 'react-router-dom';
import { Prato } from 'types/Prato';

export default function Item(props: Prato) {

  const { title, description, photo, id } = props; // desestruturação do objeto props

  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/prato/${id}`)}
      className={styles.item}
    >
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>{title}</h2>
          <p> {description} </p>
        </div>
        <TagsPrato {...props} />
      </div>
    </div>
  );
}

