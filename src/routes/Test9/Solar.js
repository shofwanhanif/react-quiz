import { cssSpace, cssSun, cssOrbit, cssPlanet } from './style';
import { useEffect, useState } from 'react';

const Solar = (props) => {
  const { value } = props
  const [planetList, setPlanetList] = useState([])

  const handleRandomColor = () => {
    const black = '#000000'
    const yellow = '#FFFF00'

    const getRandomColor = () => {
      const color = Math.floor(Math.random() * 256).toString(16)
      return color.length === 1 ? `0${color}` : color
    }

    let randomColor;

    do {
      randomColor = `#${getRandomColor()}${getRandomColor()}${getRandomColor()}`
    } while (randomColor === black || randomColor === yellow)

    return randomColor
  }

  useEffect(() => {
    const planets = []
    for (let i = 0; i < value; i++) {
      const item = {
        color: handleRandomColor(),
        top: `${(i + 1) * 50}px`,
        animationTime: (i + 1) * 2
      }
      planets.push(item)
    }
    setPlanetList(planets)

    return () => {
      setPlanetList([])
    }
  }, [value])

  return (
    <div className={cssSpace}>
      <div className={cssSun}>
        { planetList.map(({color, top, animationTime}, index) => {
          return (
            <div key={index} className={cssOrbit(animationTime)}>
              <div className={cssPlanet(color, top)} />
            </div>
          )
        }) }
      </div>
    </div>
  )
};

export default Solar;
