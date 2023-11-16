import { css, keyframes } from 'react-emotion';

export const cssSpace = css({
  marginTop: 24,
  width: 1000,
  height: 1000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'black',
  position: 'relative'
});

export const cssSun = css({
  width: 80,
  height: 80,
  backgroundColor: 'yellow',
  borderRadius: 40,
});

const keyframesSpin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  };
`

export const cssOrbit = (animationTime) => css({
  top: '50%',
  right: '50%',
  position: 'absolute',
  animation: `${keyframesSpin} ${animationTime}s linear infinite`
});

export const cssPlanet = (bgColor, topPosition) => css({
  width: 20,
  height: 20,
  borderRadius: 10,
  backgroundColor: bgColor,
  position: 'absolute',
  top: topPosition
});
