import { Box, Button, IconButton, Input, Stack, Text } from "@chakra-ui/react";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  return (
    <Box
      backgroundColor={"brand.100"}
      w="100vw"
      h="100vh"
      display={"flex"}
      flexDir={"column"}
    >
      {/* Topbar */}
      <Box marginTop={10} h={10} display={"flex"} alignItems="center">
        <IconButton
          aria-label="Back Button"
          border={"1px solid black"}
          size={"md"}
          marginLeft={5}
          onClick={() => navigate(`/`)}
        >
          <MdArrowBackIosNew size={15} />
        </IconButton>
        <Text fontSize={"3xl"} fontWeight={"500"} marginLeft={5}>
          Sign Up
        </Text>
      </Box>
      <Box marginLeft={"10%"} marginTop={20}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Submitting");
          }}
        >
          <Stack spacing={5}>
            <Box>
              <Input
                backgroundColor={"white"}
                placeholder="First Name"
                w="40%"
                marginRight={"5%"}
              ></Input>
              <Input
                backgroundColor={"white"}
                placeholder="Last Name"
                w="40%"
              ></Input>
            </Box>
            <Input
              placeholder="E-Mail"
              backgroundColor={"white"}
              w="85%"
            ></Input>
            <Input
              placeholder="Password"
              backgroundColor={"white"}
              w="85%"
              type={"password"}
            ></Input>
            <Input
              placeholder="Confirm Password"
              backgroundColor={"white"}
              w="85%"
              type={"password"}
            ></Input>
            <Button colorScheme="brand" w="85%" type="submit">
              Sign Up
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};

export default Signup;
