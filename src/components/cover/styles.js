import styled from 'styled-components/native'
import { Image } from 'react-native'
import { colors } from '../../styles/colors'

export const CoverContainer = styled.View`
  padding: 32px 16px;
  flex: 1;
  height: ${({ height }) => `${height}px`};
  background: ${colors.bg.primary};
`

export const CloudsBgContainer = styled.View`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 72px;
`

export const CloudsBg = styled(Image)`
  width: 120%;
  height: 300px;
`

export const WeatherBgContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  padding-top: 72px;
`

export const InfoContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`

export const CurrentContainer = styled.View`
  flex: 1;
  align-items: center;
`
