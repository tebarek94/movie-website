import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./componets/NavBar";
import GenereList from "./componets/GenereList";
import GameGrid from "./componets/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr", // Sidebar width for large screens
      }}
    >
      <GridItem area="nav" position="relative">
        <NavBar />
      </GridItem>

      <GridItem
        area="aside"
        paddingX={5}
        position="fixed"
        left="0"
        top="60px" // Offset by the NavBar height
        borderColor="gray.200"
      >
        <GenereList />
      </GridItem>

      <GridItem
        area="main"
        marginLeft={{
          base: 0,
          lg: "200px", // Add left margin to avoid overlap with fixed sidebar
        }}
        padding={5}
      >
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
