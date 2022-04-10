import { useState, useEffect } from 'react'
import { useFonts } from 'expo-font'
import { useLocation } from './src/hooks/useLocation'
//styles
import {
  ButtonImage,
  ActionButton,
  Container,
  ScrollContainer,
  ButtonContainer,
} from './src/styles/globalStyles'

//components
import Cover from './src/components/cover'
import Forecast from './src/components/forecast'
import HightLights from './src/components/hightlights'
import Search from './src/components/search'

//images
import gps from './assets/images/gps.png'
import search from './assets/images/search.png'

const App = () => {
  const [searchOpen, setSearchOpen] = useState(false)
  const [fontsLoaded] = useFonts({
    'Raleway-Black': require('./assets/fonts/Raleway-Black.ttf'),
    'Raleway-ExtraBold': require('./assets/fonts/Raleway-ExtraBold.ttf'),
    'Raleway-Bold': require('./assets/fonts/Raleway-Bold.ttf'),
    'Raleway-SemiBold': require('./assets/fonts/Raleway-SemiBold.ttf'),
    'Raleway-Medium': require('./assets/fonts/Raleway-Medium.ttf'),
    'Raleway-Regular': require('./assets/fonts/Raleway-Regular.ttf'),
    'Raleway-Light': require('./assets/fonts/Raleway-Light.ttf'),
    'Raleway-ExtraLight': require('./assets/fonts/Raleway-ExtraLight.ttf'),
    'Raleway-Thin': require('./assets/fonts/Raleway-Thin.ttf'),
  })
  const location = useLocation()

  const handleSearch = () => {
    setSearchOpen(!searchOpen)
  }

  useEffect(() => {
    // location.get()
  }, [])

  if (!fontsLoaded) {
    return null
  }

  return (
    <Container>
      <ScrollContainer>
        <Cover />
        <Forecast />
        <HightLights />
      </ScrollContainer>
      {searchOpen && <Search />}
      <ButtonContainer
        location={{
          bottom: '64px',
          right: '16px',
        }}
      >
        <ActionButton>
          <ButtonImage source={gps} />
        </ActionButton>
        <ActionButton onPress={handleSearch}>
          <ButtonImage source={search} />
        </ActionButton>
      </ButtonContainer>
    </Container>
  )
}

export default App
