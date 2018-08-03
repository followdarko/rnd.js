import '../fonts'
import React from 'react'
import { Flex, Box } from 'grid-styled'
import BgWithLogo from '../components/BgWithLogo'
import Card from '../components/Card'
import Title from '../components/Title'
import Button from '../components/Button'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#6624FF',
    secondary: '#FF3357',
    tertiary: '#F6F7FD',

    font: '#262626',
    bg: '#fff',

    shadow: 'rgba(15, 0, 50, 0.1)'
  },

  shadows: [
    '8px 8px 0px rgba(15, 0, 50, 0.1)',
    '16px 16px 0px rgba(15, 0, 50, 0.1)',
    '24px 24px 0px rgba(15, 0, 50, 0.1)'
  ],

  offsets: [
    'translate(8px, 8px)',
    'translate(16px, 16px)',
    'translate(24px, 24px)'
  ]
}

const App = () => (
  <ThemeProvider theme={theme}>
    <BgWithLogo>
      <Card>
        <Title>cкоро</Title>

        <Box py={[96, 96, 96, 192]} />
      </Card>

      <Flex w='100%' py='50vh' justifyContent='center'>
        <Button>Стань спикером</Button>
      </Flex>
    </BgWithLogo>
  </ThemeProvider>
)

export default App
