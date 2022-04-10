import { useWindowDimensions } from 'react-native'

//styles
import {
  CoverContainer,
  CloudsBgContainer,
  CloudsBg,
  WeatherBgContainer,
  InfoContainer,
  CurrentContainer,
} from './styles'
import { Txt, Span, Weather } from '../../styles/globalStyles'

//images
import cloudsBg from '../../../assets/images/Cloud-background.png'
import weather from '../../../assets/images/1261.png'

const Cover = () => {
  const { height } = useWindowDimensions()
  return (
    <CoverContainer height={height}>
      <CloudsBgContainer>
        <CloudsBg source={cloudsBg} />
      </CloudsBgContainer>
      <WeatherBgContainer>
        <Weather source={weather} />
      </WeatherBgContainer>
      <InfoContainer>
        <Txt degrees>
          22
          <Span degrees fontSize="32px">
            °C
          </Span>
        </Txt>
        <Txt condition>Clear</Txt>
        <CurrentContainer>
          <Txt mb="16px">Fri 8 Apr • 20 : 33 hs</Txt>
          <Txt>Rosario, Santa Fe, Argentina</Txt>
        </CurrentContainer>
      </InfoContainer>
    </CoverContainer>
  )
}

export default Cover
