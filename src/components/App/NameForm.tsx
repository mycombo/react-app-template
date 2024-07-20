import { useNameStore } from '@/store/name'
import { Button, Flex, Input } from '@chakra-ui/react'
import { ChangeEvent, useState } from 'react'

export default function NameForm() {
  const setName = useNameStore((state) => state.setName)
  const [value, setValue] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleClick = () => {
    setName(value)
  }

  return (
    <Flex gap={4} direction={'column'} align={'center'}>
      <Input
        placeholder="What's your name?"
        width={'fit-content'}
        value={value}
        onChange={handleChange}
      />
      <Button
        variant="outline"
        width={'fit-content'}
        onClick={handleClick}
        isDisabled={value === ''}
      >
        submit
      </Button>
    </Flex>
  )
}
