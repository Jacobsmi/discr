import { Box, IconButton, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BiMenu } from "react-icons/bi";
import DrawerMenu from "./DrawerMenu";
const Homepage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  return (
    <Box bg="brand.light-blue" w="100vw" h="100vh">
      <DrawerMenu
        isDrawerOpen={isDrawerOpen}
        onDrawerClose={() => setIsDrawerOpen(false)}
      />
      <Box bg="white" w="100%" h={16} display={["flex"]} alignItems="center">
        <Text marginLeft={4} fontSize="xl" fontWeight={700} flexGrow="1">
          Discr
        </Text>
        <IconButton
          aria-label="show-menu-button"
          backgroundColor="white"
          marginRight={4}
          display={["flex", "none"]}
          onClick={() => setIsDrawerOpen(true)}
        >
          <BiMenu size={28} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Homepage;
