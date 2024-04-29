import { Flex, Box } from '@chakra-ui/react'
import { ModeIcon } from './ModeIcon'

export const Header = () => {
  return (
    <Flex p={4}>
      <Box flex={1} />
      <ModeIcon />
    </Flex>
  )
}
