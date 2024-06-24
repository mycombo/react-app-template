import { Icon, useColorModeValue, As } from '@chakra-ui/react'

export default function IconBox({
  icon,
  onClick,
}: {
  icon?: As
  onClick: () => void
}) {
  const bg = useColorModeValue('#CBD5E077', '#CBD5E022')
  const bgHover = useColorModeValue('#CBD5E044', '#CBD5E044')
  const bgActive = useColorModeValue('#CBD5E077', '#CBD5E022')

  return (
    <Icon
      as={icon}
      boxSize={10}
      p={2}
      rounded={'2xl'}
      bg={bg}
      _hover={{
        bg: bgHover,
      }}
      _active={{
        bg: bgActive,
      }}
      transition={'all 300ms ease'}
      onClick={onClick}
    ></Icon>
  )
}
