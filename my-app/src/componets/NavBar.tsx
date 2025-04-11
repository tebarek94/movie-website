import { HStack, Image, Text } from '@chakra-ui/react'
import logo from "../assets/react.svg"

const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
      <Image src={logo} />
      <Text>
        Dark Mood
      </Text>

    </HStack>
  )
}

export default NavBar
