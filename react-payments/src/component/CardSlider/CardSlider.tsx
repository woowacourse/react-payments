import Slider from "component/common/Slider/Slider";
import { API_URL } from "constants/index";
import useFetch from "hooks/useFetch";
import { CardDataContext, initCardDataAction } from "provider/CardDataProvider";
import { useContext, useEffect, useRef, useState } from "react";
import Card from "component/common/Card/Card.component";
import SkeletonCardBox from "component/common/SkeletonCard/SkeletonCard.component";
import PaymentLabel from "component/PaymentLabel/PaymentLabel";
import CardAddLink from "component/CardAddLink/CardAddLink.component";

function CardSlider() {
  const { data, loading } = useFetch(`${API_URL}/api/cards`);
  const cardDataContext = useContext(CardDataContext);
  if (!cardDataContext) throw new Error("Cannot find cardDataContext");

  const { cardData, dispatch } = cardDataContext;

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLDivElement | null>(null);

  const nextSlide = () => {
    if (currentSlide >= Object.keys(cardData).length) {
      return;
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      return;
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    if (slideRef.current !== null) {
      slideRef.current.style.transition = "all 0.5s ease-in-out";
      slideRef.current.style.transform = `translateX(calc(-${currentSlide}00% - ${
        currentSlide * 80
      }px))`;
    }
  }, [currentSlide]);

  useEffect(() => {
    if (!data) {
      return;
    }

    dispatch(initCardDataAction(data));
  }, [dispatch, data]);

  return (
    <div>
      <PaymentLabel styleType="holding-card" as="span">
        보유카드
      </PaymentLabel>
      <Slider slideRef={slideRef} nextSlide={nextSlide} prevSlide={prevSlide}>
        {loading ? (
          <SkeletonCardBox />
        ) : (
          Object.entries(cardData).map(([_, cardDatum]) => (
            <Card {...cardDatum.attributes} key={cardDatum.id} />
          ))
        )}
        <div>
          <CardAddLink to="/add">+</CardAddLink>
        </div>
      </Slider>
    </div>
  );
}

export default CardSlider;
