import { Game } from "../hooks/useGame";
import { Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";
import PlatformList from "./PlatformList";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
        <PlatformList platforms={game.parent_platforms.map(p=>p.platform)} />
        <CriticScore score={game.metacritic} />
        </HStack>
        
      </CardBody>
    </Card.Root>
  );
};

export default GameCard;
