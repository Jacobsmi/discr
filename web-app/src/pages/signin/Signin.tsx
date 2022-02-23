import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button } from "@chakra-ui/react";

const Signin = () => {
    const { loginWithRedirect } = useAuth0();
  return (
    <Box
      backgroundColor={"brand.100"}
      w="100vw"
      h="100vh"
      display={"flex"}
      flexDir={"column"}
    >
        <Button onClick={()=>loginWithRedirect()}>Login</Button>
    </Box>
  );
};

export default Signin;