import { Flex, Box, Text } from '@chakra-ui/react'
import ModeButton from './Header/ModeButton'
import { useNameStore } from '@/store/name'

export default function Header() {
  const name = useNameStore((state) => state.name)

  return (
    <Flex p={4} gap={4} align={'center'}>
      <Box flex={1} />
      <Text fontSize={'xl'} color={'#224b8f'}>
        {name}
      </Text>
      <ModeButton />
    </Flex>
  )
}
