import { useColorMode, useColorModeValue } from '@chakra-ui/react'
import { PhSun } from './Icons/SunIcon'
import { PhMoon } from './Icons/MoonIcon'
import IconBox from './IconBox'

export default function ModeIcon() {
  const { toggleColorMode } = useColorMode()
  const icon = useColorModeValue(PhSun, PhMoon)

  return <IconBox icon={icon} onClick={toggleColorMode} />
}
