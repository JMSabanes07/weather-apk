//styles
import { ForecastContainer, DegreesContainer } from './styles'
import { Txt, Weather, Card } from '../../styles/globalStyles'
import weather from '../../../assets/images/1261.png'

const Forecast = () => {
  return (
    <ForecastContainer>
      <Card>
        <Txt cardTitle>Saturday</Txt>
        <Weather tiny source={weather} />
        <DegreesContainer>
          <Txt cardDegree>2°c</Txt>
          <Txt cardDegree>2°c</Txt>
        </DegreesContainer>
      </Card>
      <Card>
        <Txt cardTitle>Saturday</Txt>
        <Weather tiny source={weather} />
        <DegreesContainer>
          <Txt cardDegree>2°c</Txt>
          <Txt cardDegree>2°c</Txt>
        </DegreesContainer>
      </Card>
      <Card>
        <Txt cardTitle>Saturday</Txt>
        <Weather tiny source={weather} />
        <DegreesContainer>
          <Txt cardDegree>2°c</Txt>
          <Txt cardDegree>2°c</Txt>
        </DegreesContainer>
      </Card>
    </ForecastContainer>
  )
}

export default Forecast
