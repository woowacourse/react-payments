import checkCardInfo from '../../validator';

function CardInputForm({ cardInfo, children }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const { number1, number2, number3, number4, month, year, cvc } = cardInfo;

    try {
      checkCardInfo({ number1, number2, number3, number4, month, year, cvc });
    } catch (error) {
      alert(error.message);
    }
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
}

export default CardInputForm;
