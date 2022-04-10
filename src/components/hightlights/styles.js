import styled, { css } from 'styled-components/native'
import { Image } from 'react-native'

export const HighLightsContainer = styled.View`
  padding: 8px;
`

export const WindContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const HumidityContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 90%;
`

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: ${({ justify }) => justify || 'flex-start'};
  ${({ bg, info }) => {
    switch (true) {
      case bg:
        return css`
          background: #e7e7eb;
          border-radius: 5px;
        `
      case info:
        return css`
          margin: 2px 0;
        `
    }
  }}
`
export const HumidityBar = styled.View`
  background: #ffec65;
  height: 10px;
  width: ${({ size }) => size};
  border-radius: 5px;
`

export const Navigator = styled(Image)`
  width: 30px;
  height: 30px;
  resize-mode: contain;
  margin-right: 8px;
  transform: ${({ degrees }) => `rotate(${degrees}deg)`};
`
