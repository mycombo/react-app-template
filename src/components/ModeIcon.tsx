import { Icon, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { PhSun } from './Icons/SunIcon'
import { PhMoon } from './Icons/MoonIcon'

export const ModeIcon = () => {
  const { toggleColorMode } = useColorMode()
  const icon = useColorModeValue(PhSun, PhMoon)

  return <Icon as={icon} boxSize={8} onClick={toggleColorMode}></Icon>
}
