import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

function Complete() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state) navigate('/');
  }, []);

  return (
    <div>
      <img src="./img/circle_check.png" />
      {location.state ? (
        <>
          <p>{location.state.cardNumberPart1}로 시작하는</p>
          <p>{location.state.cardBank}가 등록되었어요.</p>
        </>
      ) : null}
    </div>
  );
}

export default Complete;
