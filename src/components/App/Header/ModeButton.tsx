import { useColorMode, useColorModeValue } from '@chakra-ui/react'
import { PhSun } from '@/components/Icons/SunIcon'
import { PhMoon } from '@/components/Icons/MoonIcon'
import IconBox from '@/components/container/IconBox'

export default function ModeButton() {
  const { toggleColorMode } = useColorMode()
  const icon = useColorModeValue(PhSun, PhMoon)

  return <IconBox icon={icon} onClick={toggleColorMode} />
}
