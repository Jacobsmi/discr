import { Box, Button, IconButton, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import DrawerMenu from "./DrawerMenu";
import DiskAndBasket from "../../imgs/DiskAndBasket.svg";

const Homepage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  return (
    <Box bg="brand.100" w="100vw" h="100vh">
      <DrawerMenu
        isDrawerOpen={isDrawerOpen}
        onDrawerClose={() => setIsDrawerOpen(false)}
      />
      {/* Topbar */}
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
      {/* body */}
      <Box display={"flex"} flexDir="column" alignItems={"center"}>
        <Box
          display={"flex"}
          alignItems="center"
          fontSize={20}
          width="50%"
          textAlign={"center"}
          marginTop={20}
        >
          Buy, Sell, and Trade Disc Golf Equipment
        </Box>
        <Button
          colorScheme="brand"
          variant={"solid"}
          w="50%"
          h={14}
          marginTop={10}
        >
          <Link
            to="/signup"
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Get Started
          </Link>
        </Button>
        <Button
          colorScheme="brand"
          variant={"solid"}
          w="50%"
          h={14}
          marginTop={10}
          backgroundColor={"brand.200"}
        >
          <Link
            to="/signin"
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Sign In
          </Link>
        </Button>
        <Box marginTop={20}>
          <Image src={DiskAndBasket} />
        </Box>
      </Box>
    </Box>
  );
};

export default Homepage;
