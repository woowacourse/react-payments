import styles from '../cardDisplay.module.css';

type CardNetworkProps = {
  cardNetwork:
    | {
        name: string;
        image: string;
      }
    | undefined;
};

const CardNetwork = ({ cardNetwork }: CardNetworkProps) => {
  if (!cardNetwork) {
    return null;
  }

  return (
    <img
      src={cardNetwork.image}
      alt={cardNetwork.name}
      className={styles.cardNetwork}
    />
  );
};

export default CardNetwork;
