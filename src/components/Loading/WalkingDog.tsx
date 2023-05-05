import styled from 'styled-components';

export function WalkingDog() {
  return (
    <Style.Container>
      <div className='dog'>
        <div className='torso'>
          <div className='fur'>
            <div className='spot' />
          </div>
          <div className='neck'>
            <div className='fur' />
            <div className='head'>
              <div className='fur'>
                <div className='snout' />
              </div>
              <div className='ears'>
                <div className='ear'>
                  <div className='fur' />
                </div>
                <div className='ear'>
                  <div className='fur' />
                </div>
              </div>
              <div className='eye' />
            </div>
            <div className='collar' />
          </div>
          <div className='legs'>
            <div className='leg'>
              <div className='fur' />
              <div className='leg-inner'>
                <div className='fur' />
              </div>
            </div>
            <div className='leg'>
              <div className='fur' />
              <div className='leg-inner'>
                <div className='fur' />
              </div>
            </div>
            <div className='leg'>
              <div className='fur' />
              <div className='leg-inner'>
                <div className='fur' />
              </div>
            </div>
            <div className='leg'>
              <div className='fur' />
              <div className='leg-inner'>
                <div className='fur' />
              </div>
            </div>
          </div>
          <div className='tail'>
            <div className='tail'>
              <div className='tail'>
                <div className='tail -end'>
                  <div className='tail '>
                    <div className='tail'>
                      <div className='tail'>
                        <div className='tail' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Style.Container>
  );
}

const Style = {
  Container: styled.div`
    *,
    *:before,
    *:after {
      position: relative;
      -webkit-animation-timing-function: var(--easing) !important;
      animation-timing-function: var(--easing) !important;
    }

    * {
      --color-fur: #ffb141;
      --color-fur-dark: #f5832c;
      --color-spot: #f9584c;
      --color-snout: #544258;
      --color-collar: #3eab6c;
      --duration: 0.7s;
      --semi-duration: calc(var(--duration) / 2);
      --easing: cubic-bezier(0.5, 0, 0.5, 1);
      --stagger: calc(-1 * var(--semi-duration) / 2);
    }

    width: 100%;
    height: 100%;

    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    .dog {
      z-index: 1;
      height: 300px;
      width: 300px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .dog * {
      position: absolute;
      will-change: transform;
    }

    .dog:before {
      content: '';
      position: absolute;
      bottom: 13.3333333333%;
      left: 0;
      width: 100%;
      height: 3.3333333333%;
      background-color: #d3d1d1;
      border-radius: 2px;
      -webkit-animation: shadow calc(1 * var(--semi-duration)) infinite;
      animation: shadow calc(1 * var(--semi-duration)) infinite;
    }

    .torso {
      width: 56.6666666667%;
      height: 33.3333333333%;
      -webkit-animation: torso var(--semi-duration) both infinite;
      animation: torso var(--semi-duration) both infinite;
    }

    .fur {
      position: absolute;
      overflow: hidden;
    }

    .fur:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 150%;
      top: 0;
      left: 0;
      background-color: var(--color, var(--color-fur));
      -webkit-transform-origin: center bottom;
      -ms-transform-origin: center bottom;
      transform-origin: center bottom;
    }

    .torso > .fur {
      height: 100%;
      width: 185px;
      border-top-left-radius: 40px;
      -webkit-transform-origin: left center;
      -ms-transform-origin: left center;
      transform-origin: left center;
      -webkit-transform: rotate(-20deg) translateY(10px);
      -ms-transform: rotate(-20deg) translateY(10px);
      transform: rotate(-20deg) translateY(10px);
      z-index: 1;
    }

    .torso > .fur:after {
      height: 100%;
      width: 100%;
      border-bottom-left-radius: 200px 85px;
      border-bottom-right-radius: 100px;
    }

    .torso .spot {
      width: 120px;
      height: 120px;
      bottom: 40px;
      left: -20px;
      border-radius: 50%;
      background-color: var(--color-spot);
      z-index: 1;
      -webkit-animation: spot var(--duration) calc(-1 * var(--semi-duration)) both infinite;
      animation: spot var(--duration) calc(-1 * var(--semi-duration)) both infinite;
    }

    .torso .spot:after {
      content: '';
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background-color: inherit;
      position: absolute;
      bottom: -10px;
      right: 5px;
    }

    .neck {
      width: 50%;
      height: 100px;
      right: -5px;
      bottom: calc(100% - 10px);
      -webkit-transform-origin: center bottom;
      -ms-transform-origin: center bottom;
      transform-origin: center bottom;
      -webkit-transform: rotate(15deg);
      -ms-transform: rotate(15deg);
      transform: rotate(15deg);
      z-index: 2;
    }

    .neck > .fur {
      border-bottom-left-radius: 10px;
      height: 100%;
      width: 100%;
    }

    .neck > .fur:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      height: 50px;
      width: 100%;
      background-color: var(--color-fur-dark);
      z-index: 1;
      -webkit-transform-origin: right bottom;
      -ms-transform-origin: right bottom;
      transform-origin: right bottom;
      -webkit-transform: rotate(15deg);
      -ms-transform: rotate(15deg);
      transform: rotate(15deg);
    }

    .head {
      height: 80%;
      width: 145%;
      left: -2%;
      bottom: 50%;
      -webkit-transform-origin: left center;
      -ms-transform-origin: left center;
      transform-origin: left center;
      z-index: 2;
      -webkit-animation: head var(--semi-duration) calc(var(--semi-duration) / 4) infinite;
      animation: head var(--semi-duration) calc(var(--semi-duration) / 4) infinite;
    }

    .head > .fur {
      height: 100%;
      width: 100%;
      border-bottom-right-radius: 80px;
    }

    .head > .fur:before {
      content: '';
      position: absolute;
      top: -80%;
      left: -30%;
      width: 100%;
      height: 0;
      padding-top: 100%;
      background-color: var(--color-spot);
      z-index: 1;
      border-radius: 50%;
    }

    .snout {
      --color: var(--color-snout);
      width: 25%;
      height: 0;
      padding-top: 25%;
      background-color: var(--color);
      top: 0;
      right: -5px;
      border-bottom-left-radius: 100%;
      z-index: 1;
    }

    .ears {
      bottom: 40%;
      height: 100%;
      width: 30%;
      left: 0;
      z-index: -1;
    }

    .ear {
      --color: var(--color-spot);
      width: 100%;
      height: 100%;
      bottom: 0;
      left: 0;
      -webkit-transform-origin: left bottom;
      -ms-transform-origin: left bottom;
      transform-origin: left bottom;
      -webkit-transform: rotate(-10deg);
      -ms-transform: rotate(-10deg);
      transform: rotate(-10deg);
      -webkit-animation: ear-front calc(var(--duration) / 2) infinite;
      animation: ear-front calc(var(--duration) / 2) infinite;
    }

    .ear:before {
      content: '';
      position: absolute;
      height: 25px;
      width: 15px;
      z-index: 2;
      top: -2px;
      right: -7px;
      border-top-left-radius: 100%;
      border-width: 2px;
      border-color: transparent;
      border-style: solid;
      border-left: 2px solid var(--color-snout);
      -webkit-transform-origin: bottom left;
      -ms-transform-origin: bottom left;
      transform-origin: bottom left;
      -webkit-animation: ear-mark var(--semi-duration) calc(-1 * var(--semi-duration)) infinite;
      animation: ear-mark var(--semi-duration) calc(-1 * var(--semi-duration)) infinite;
    }

    .ear > .fur {
      border-top-left-radius: 100%;
      height: 100%;
      width: 100%;
    }

    .ear:nth-child(2) {
      left: 15px;
      bottom: 5px;
      -webkit-transform: rotate(-5deg);
      -ms-transform: rotate(-5deg);
      transform: rotate(-5deg);
      --color: var(--color-fur);
      z-index: -1;
      -webkit-animation: ear-back calc(var(--duration) / 2) infinite both;
      animation: ear-back calc(var(--duration) / 2) infinite both;
    }

    .eye {
      --size: 6%;
      --color: var(--color-snout);
      width: var(--size);
      height: 0;
      padding: var(--size);
      left: 35%;
      top: 20%;
      border-radius: 50%;
      background-color: var(--color);
      z-index: 1;
    }

    .eye:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: var(--color);
      z-index: 1;
    }

    .eye:after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      left: -50%;
      top: -50%;
      border-top-left-radius: 100%;
      border-width: 2px;
      border-color: var(--color);
      border-style: solid;
      border-bottom-color: var(--color-spot);
      border-right-color: var(--color-spot);
      -webkit-transform: scale(1.25);
      -ms-transform: scale(1.25);
      transform: scale(1.25);
      z-index: 0;
    }

    .collar {
      width: calc(100% + 10px);
      height: 15%;
      background-color: var(--color-collar);
      left: -5px;
      bottom: 30px;
      border-radius: 5px;
      -webkit-animation: collar var(--semi-duration) calc(var(--semi-duration) / 4) infinite;
      animation: collar var(--semi-duration) calc(var(--semi-duration) / 4) infinite;
      z-index: 2;
    }

    .collar:after {
      content: '';
      width: 18%;
      height: 120%;
      border-radius: 50%;
      background: var(--color-snout);
      position: absolute;
      right: 0%;
      top: 110%;
      -webkit-transform-origin: center top;
      -ms-transform-origin: center top;
      transform-origin: center top;
      -webkit-animation: tag var(--semi-duration) infinite both;
      animation: tag var(--semi-duration) infinite both;
    }

    .torso > .legs {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .leg {
      position: absolute;
      height: 65px;
      width: 45px;
      background-color: var(--color);
      -webkit-transform-origin: center 5px;
      -ms-transform-origin: center 5px;
      transform-origin: center 5px;
      -webkit-animation: leg infinite var(--duration) var(--delay, 0s);
      animation: leg infinite var(--duration) var(--delay, 0s);
    }

    .leg > .fur {
      width: 144.4444444444%;
      height: 100%;
    }

    .leg > .fur:after {
      width: 45px;
      bottom: 0;
      top: initial;
      -webkit-transform: rotate(15deg);
      -ms-transform: rotate(15deg);
      transform: rotate(15deg);
    }

    .leg-inner {
      position: absolute;
      height: 65%;
      width: 100%;
      top: calc(100%);
      -webkit-transform-origin: center top;
      -ms-transform-origin: center top;
      transform-origin: center top;
    }

    .leg-inner:before {
      content: '';
      width: 45px;
      height: 45px;
      background-color: var(--color);
      position: absolute;
      border-radius: 50%;
      top: -22.5px;
    }

    .leg > .leg-inner {
      -webkit-animation: leg-inner infinite var(--duration) calc(var(--delay));
      animation: leg-inner infinite var(--duration) calc(var(--delay));
      -webkit-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
      transform: rotate(90deg);
    }

    .leg-inner > .fur {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
    }

    .leg-inner > .fur:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 150%;
      top: 0;
      left: 0;
      background-color: var(--color);
      -webkit-transform-origin: center top;
      -ms-transform-origin: center top;
      transform-origin: center top;
      -webkit-transform: rotate(15deg);
      -ms-transform: rotate(15deg);
      transform: rotate(15deg);
    }

    .legs > .leg {
      bottom: 5px;
      --color: var(--color-fur);
    }

    .legs > .leg:nth-child(1),
    .legs .leg:nth-child(3) {
      right: 15px;
    }

    .legs > .leg:nth-child(3),
    .legs > .leg:nth-child(4) {
      --color: var(--color-fur-dark);
      z-index: -1;
    }

    .legs > .leg:nth-child(1),
    .legs .leg:nth-child(4) {
      --delay: 0s;
    }

    .legs > .leg:nth-child(2),
    .legs > .leg:nth-child(3) {
      --delay: calc(-1 * var(--duration) / 2);
    }

    .legs > .leg:nth-child(2) {
      left: 0;
    }

    .legs > .leg:nth-child(4) {
      left: 0;
    }

    .tail {
      height: 15px;
      width: 20px;
      background-color: var(--color);
      border-top-right-radius: 10px 100%;
      border-top-left-radius: 10px 100%;
      -webkit-animation: tail var(--semi-duration) infinite;
      animation: tail var(--semi-duration) infinite;
    }

    .torso > .tail {
      --color: var(--color-spot);
      bottom: calc(100% - 15px);
      left: 0;
      -webkit-transform-origin: center bottom;
      -ms-transform-origin: center bottom;
      transform-origin: center bottom;
      -webkit-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }

    .tail > .tail {
      bottom: calc(90%);
      -webkit-transform-origin: bottom left;
      -ms-transform-origin: bottom left;
      transform-origin: bottom left;
      -webkit-transform: rotate(-10deg) translateY(50%) scaleX(0.8) scaleY(0.9);
      -ms-transform: rotate(-10deg) translateY(50%) scaleX(0.8) scaleY(0.9);
      transform: rotate(-10deg) translateY(50%) scaleX(0.8) scaleY(0.9);
      -webkit-animation: tail-inner var(--semi-duration) var(--stagger) infinite;
      animation: tail-inner var(--semi-duration) var(--stagger) infinite;
    }

    @-webkit-keyframes shadow {
      from,
      to {
        -webkit-transform: scaleX(0.75);
        transform: scaleX(0.75);
      }
      45%,
      55% {
        -webkit-transform: scaleX(0.5);
        transform: scaleX(0.5);
      }
    }

    @keyframes shadow {
      from,
      to {
        -webkit-transform: scaleX(0.75);
        transform: scaleX(0.75);
      }
      45%,
      55% {
        -webkit-transform: scaleX(0.5);
        transform: scaleX(0.5);
      }
    }

    @-webkit-keyframes torso {
      from,
      to {
        -webkit-transform: none;
        transform: none;
      }
      50% {
        -webkit-transform: translateY(15%);
        transform: translateY(15%);
      }
    }

    @keyframes torso {
      from,
      to {
        -webkit-transform: none;
        transform: none;
      }
      50% {
        -webkit-transform: translateY(15%);
        transform: translateY(15%);
      }
    }

    @-webkit-keyframes spot {
      from,
      66%,
      to {
        -webkit-transform: none;
        transform: none;
      }
      33% {
        -webkit-transform: translateX(10px);
        transform: translateX(10px);
      }
    }

    @keyframes spot {
      from,
      66%,
      to {
        -webkit-transform: none;
        transform: none;
      }
      33% {
        -webkit-transform: translateX(10px);
        transform: translateX(10px);
      }
    }

    @-webkit-keyframes head {
      from,
      to {
        -webkit-transform: rotate(-10deg);
        transform: rotate(-10deg);
      }
      50% {
        -webkit-transform: rotate(-15deg);
        transform: rotate(-15deg);
      }
    }

    @keyframes head {
      from,
      to {
        -webkit-transform: rotate(-10deg);
        transform: rotate(-10deg);
      }
      50% {
        -webkit-transform: rotate(-15deg);
        transform: rotate(-15deg);
      }
    }

    @-webkit-keyframes ear-front {
      50% {
        -webkit-transform: rotate(-15deg);
        transform: rotate(-15deg);
      }
    }

    @keyframes ear-front {
      50% {
        -webkit-transform: rotate(-15deg);
        transform: rotate(-15deg);
      }
    }

    @-webkit-keyframes ear-mark {
      from,
      to {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      50% {
        -webkit-transform: rotate(25deg);
        transform: rotate(25deg);
      }
    }

    @keyframes ear-mark {
      from,
      to {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      50% {
        -webkit-transform: rotate(25deg);
        transform: rotate(25deg);
      }
    }

    @-webkit-keyframes ear-back {
      from,
      to {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      50% {
        -webkit-transform: rotate(-10deg);
        transform: rotate(-10deg);
      }
    }

    @keyframes ear-back {
      from,
      to {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      50% {
        -webkit-transform: rotate(-10deg);
        transform: rotate(-10deg);
      }
    }

    @-webkit-keyframes collar {
      from,
      to {
        -webkit-transform: none;
        transform: none;
      }
      50% {
        -webkit-transform: translateY(-25%);
        transform: translateY(-25%);
      }
    }

    @keyframes collar {
      from,
      to {
        -webkit-transform: none;
        transform: none;
      }
      50% {
        -webkit-transform: translateY(-25%);
        transform: translateY(-25%);
      }
    }

    @-webkit-keyframes tag {
      from,
      to {
        -webkit-transform: rotate(-15deg);
        transform: rotate(-15deg);
      }
      50% {
        -webkit-transform: rotate(-15deg) scaleY(1.5);
        transform: rotate(-15deg) scaleY(1.5);
      }
    }

    @keyframes tag {
      from,
      to {
        -webkit-transform: rotate(-15deg);
        transform: rotate(-15deg);
      }
      50% {
        -webkit-transform: rotate(-15deg) scaleY(1.5);
        transform: rotate(-15deg) scaleY(1.5);
      }
    }

    @-webkit-keyframes leg {
      from,
      to {
        -webkit-transform: none;
        transform: none;
      }
      33% {
        -webkit-transform: rotate(-55deg);
        transform: rotate(-55deg);
      }
      66% {
        -webkit-transform: rotate(-20deg);
        transform: rotate(-20deg);
      }
    }

    @keyframes leg {
      from,
      to {
        -webkit-transform: none;
        transform: none;
      }
      33% {
        -webkit-transform: rotate(-55deg);
        transform: rotate(-55deg);
      }
      66% {
        -webkit-transform: rotate(-20deg);
        transform: rotate(-20deg);
      }
    }

    @-webkit-keyframes leg-inner {
      from,
      to {
        -webkit-transform: none;
        transform: none;
      }
      33% {
        -webkit-transform: rotate(70deg);
        transform: rotate(70deg);
      }
      76% {
        -webkit-transform: none;
        transform: none;
      }
    }

    @keyframes leg-inner {
      from,
      to {
        -webkit-transform: none;
        transform: none;
      }
      33% {
        -webkit-transform: rotate(70deg);
        transform: rotate(70deg);
      }
      76% {
        -webkit-transform: none;
        transform: none;
      }
    }

    @-webkit-keyframes tail {
      from,
      to {
        -webkit-transform: rotate(-45deg) translateX(-15%);
        transform: rotate(-45deg) translateX(-15%);
      }
      50% {
        -webkit-transform: rotate(-25deg) translateX(15%);
        transform: rotate(-25deg) translateX(15%);
      }
    }

    @keyframes tail {
      from,
      to {
        -webkit-transform: rotate(-45deg) translateX(-15%);
        transform: rotate(-45deg) translateX(-15%);
      }
      50% {
        -webkit-transform: rotate(-25deg) translateX(15%);
        transform: rotate(-25deg) translateX(15%);
      }
    }

    @-webkit-keyframes tail-inner {
      from,
      to {
        -webkit-transform: rotate(-10deg) translateY(50%) scaleX(0.8) scaleY(0.9);
        transform: rotate(-10deg) translateY(50%) scaleX(0.8) scaleY(0.9);
      }
      50% {
        -webkit-transform: rotate(5deg) translateY(50%) scaleX(0.8) scaleY(0.9);
        transform: rotate(5deg) translateY(50%) scaleX(0.8) scaleY(0.9);
      }
    }

    @keyframes tail-inner {
      from,
      to {
        -webkit-transform: rotate(-10deg) translateY(50%) scaleX(0.8) scaleY(0.9);
        transform: rotate(-10deg) translateY(50%) scaleX(0.8) scaleY(0.9);
      }
      50% {
        -webkit-transform: rotate(5deg) translateY(50%) scaleX(0.8) scaleY(0.9);
        transform: rotate(5deg) translateY(50%) scaleX(0.8) scaleY(0.9);
      }
    }
  `,
};
