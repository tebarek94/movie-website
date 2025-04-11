import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGeneres";

const GenereList = () => {
  const { data } = useGenres();

  return (
    <List.Root gap={3}>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingX={7}>
          <HStack>
            <Image
              boxSize="32px"
              src={genre.image_background}
              borderRadius={8}
              alt={genre.name}
            />
            <Button variant="ghost" onClick={() => console.log("clicked")}>
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenereList;
