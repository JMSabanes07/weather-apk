import styled, { css } from 'styled-components/native'
import { Image } from 'react-native'
import { colors } from './colors'

export const ButtonImage = styled(Image)`
  width: 25px;
  height: 25px;
`

export const ButtonContainer = styled.View`
  display: flex;
  position: absolute;
  z-index: 2;
  ${({ location }) => {
    if (location?.top) {
      return css`
        top: ${location.top};
      `
    }
  }}
  ${({ location }) => {
    if (location?.bottom) {
      return css`
        bottom: ${location.bottom};
      `
    }
  }}
  ${({ location }) => {
    if (location?.left) {
      return css`
        left: ${location.left};
      `
    }
  }}
  ${({ location }) => {
    if (location?.right) {
      return css`
        right: ${location.right};
      `
    }
  }}
`

export const ActionButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 23px;
  background: #6e707a;
  margin: 8px 0;
`

export const Container = styled.View`
  flex: 1;
  width: 100%;
`

export const ScrollContainer = styled.ScrollView`
  background: ${colors.bg.secondary};
`

export const Txt = styled.Text`
  color: ${colors.text.secondary};
  margin-top: ${({ mt }) => mt || '0'};
  margin-bottom: ${({ mb }) => mb || '0'};
  margin-left: ${({ ml }) => ml || '0'};
  margin-right: ${({ mr }) => mr || '0'};
  font-size: ${({ fontSize }) => fontSize || '16px'};
  font-family: ${({ fontFamily }) => fontFamily || 'Raleway-Regular'};
  ${({
    degrees,
    condition,
    cardTitle,
    cardDegree,
    sectionTitle,
    highlights,
    tinyHighlights,
    cardInfo,
    cardInfoTiny,
  }) => {
    switch (true) {
      case degrees:
        return css`
          color: ${colors.text.primary};
          font-size: 72px;
          font-family: Raleway-Bold;
          flex: 3;
        `
      case condition:
        return css`
          flex: 2;
          font-size: 32px;
          font-family: Raleway-Bold;
        `
      case cardTitle:
        return css`
          font-size: 16px;
          font-family: Raleway-SemiBold;
          color: ${colors.text.primary};
          text-transform: capitalize;
          flex: 1;
          text-align: center;
        `
      case highlights:
        return css`
          font-size: 64px;
          line-height: 64px;
          font-family: Raleway-Bold;
          color: ${colors.text.primary};
          margin-right: 4px;
        `
      case tinyHighlights:
        return css`
          font-size: 32px;
          line-height: 64px;
          font-family: Raleway-SemiBold;
          color: ${colors.text.primary};
          margin-left: 4px;
        `
      case cardDegree:
        return css`
          font-size: 16px;
          font-family: Raleway-SemiBold;
          color: ${colors.text.primary};
          text-transform: capitalize;
          flex: 1;
          text-align: center;
        `
      case sectionTitle:
        return css`
          font-size: 24px;
          font-family: Raleway-Bold;
          color: ${colors.text.primary};
          text-transform: capitalize;
          padding-bottom: 8px;
          padding-left: 3%;
        `
      case cardInfo:
        return css`
          font-size: 18px;
          font-family: Raleway-Regular;
          color: ${colors.text.primary};
          text-transform: uppercase;
          padding-left: 8px;
        `
      case cardInfoTiny:
        return css`
          font-size: 11px;
          font-family: Raleway-Regular;
          color: ${colors.text.primary};
          text-transform: uppercase;
        `
    }
  }}
`

export const Span = styled(Txt)`
  font-size: ${({ fontSize }) => fontSize || '16px'};
`

export const TextContainer = styled.View`
  margin: 16px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Weather = styled(Image)`
  width: 90px;
  height: 100px;
  resize-mode: contain;
  margin: 16px 0;
  ${({ tiny }) => {
    switch (true) {
      case tiny:
        return css`
          height: 60px;
          width: 50px;
        `
    }
  }}
`

export const Card = styled.View`
  display: flex;
  align-items: center;
  width: 44%;
  margin: 3% 3%;
  background: ${colors.bg.primary};
  padding: 16px;
  ${({ w100 }) => {
    switch (true) {
      case w100:
        return css`
          width: 94%;
        `
    }
  }}
`
