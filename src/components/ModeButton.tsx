import { useColorMode, useColorModeValue } from '@chakra-ui/react'
import { PhSun } from './Icons/SunIcon'
import { PhMoon } from './Icons/MoonIcon'
import IconBox from './container/IconBox'

export default function ModeButton() {
  const { toggleColorMode } = useColorMode()
  const icon = useColorModeValue(PhSun, PhMoon)

  return <IconBox icon={icon} onClick={toggleColorMode} />
}
