import { Flex, Box } from '@chakra-ui/react'
import ModeButton from './ModeButton'

export default function Header() {
  return (
    <Flex p={4}>
      <Box flex={1} />
      <ModeButton />
    </Flex>
  )
}
