import useGame from '../hooks/useGame';
import { SimpleGrid } from '@chakra-ui/react';
import GameCard from './GameCard';

const GameGrid = () => {
  const { games, error } = useGame();

  return (
    <>
      {error && <p>{error}</p>}
      {console.log(games)}

      <SimpleGrid columns={{
        sm:1,md:2 ,lg:3,xl:4
      }} gap="40px">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
