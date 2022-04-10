import {
  HighLightsContainer,
  WindContainer,
  Navigator,
  HumidityContainer,
  Row,
  HumidityBar,
} from './styles'
import { Card, TextContainer, Txt } from '../../styles/globalStyles'

//imgaes
import navigator from '../../../assets/images/navigator.png'

const HighLights = () => {
  return (
    <HighLightsContainer>
      <Txt sectionTitle>Today&#39;s Highlights</Txt>
      <Card w100>
        <Txt cardTitle>Wind Status</Txt>
        <TextContainer>
          <Txt highlights>13</Txt>
          <Txt tinyHighlights>km/h</Txt>
        </TextContainer>
        <WindContainer>
          <Navigator source={navigator} degrees={'0'} />
          <Txt cardInfo>EWE</Txt>
        </WindContainer>
      </Card>
      <Card w100>
        <Txt cardTitle>Humidity</Txt>
        <TextContainer>
          <Txt highlights>50</Txt>
          <Txt tinyHighlights>%</Txt>
        </TextContainer>
        <HumidityContainer>
          <Row justify="space-between" info>
            <Txt cardInfoTiny>0</Txt>
            <Txt cardInfoTiny>50</Txt>
            <Txt cardInfoTiny>100</Txt>
          </Row>
          <Row bg>
            <HumidityBar size={'50%'} />
          </Row>
          <Row justify="flex-end" info>
            <Txt cardInfoTiny>%</Txt>
          </Row>
        </HumidityContainer>
      </Card>
      <Card w100>
        <Txt cardTitle>Visibility</Txt>
        <TextContainer>
          <Txt highlights>10</Txt>
          <Txt tinyHighlights>km</Txt>
        </TextContainer>
      </Card>
      <Card w100>
        <Txt cardTitle>Air Pressure</Txt>
        <TextContainer>
          <Txt highlights>1019</Txt>
          <Txt tinyHighlights>mb</Txt>
        </TextContainer>
      </Card>
    </HighLightsContainer>
  )
}

export default HighLights
