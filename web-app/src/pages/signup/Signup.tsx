import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  IconButton,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";

type SignupFormData = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirm: string;
};

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>();

  const signupSubmitHandler: SubmitHandler<SignupFormData> = (data) => {
    console.log(data);
  };

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
        <form onSubmit={handleSubmit(signupSubmitHandler)}>
          <Stack spacing={5}>
            <Box display={"flex"}>
              <FormControl isInvalid={!!errors.firstname}>
                <Input
                  isInvalid={!!errors.firstname}
                  backgroundColor={"white"}
                  placeholder="First Name"
                  w="70%"
                  marginRight={"5%"}
                  {...register("firstname", { required: true })}
                ></Input>
                {!!errors.firstname && (
                  <FormErrorMessage>Cannot be empty</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={!!errors.lastname}>
                <Input
                  isInvalid={!!errors.lastname}
                  backgroundColor={"white"}
                  placeholder="Last Name"
                  w="70%"
                  {...register("lastname", { required: true })}
                ></Input>
                {!!errors.lastname && (
                  <FormErrorMessage>Cannot be empty</FormErrorMessage>
                )}
              </FormControl>
            </Box>
            <FormControl isInvalid={!!errors.email}>
              <Input
                isInvalid={!!errors.email}
                placeholder="E-Mail"
                backgroundColor={"white"}
                w="85%"
                {...register("email", { required: true })}
              ></Input>
              {!!errors.email && (
                <FormErrorMessage>Must be valid email</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={!!errors.password}>
              <Input
                isInvalid={!!errors.password}
                placeholder="Password"
                backgroundColor={"white"}
                w="85%"
                type={"password"}
                {...register("password", { required: true })}
              ></Input>
              {!!errors.password && (
                <FormErrorMessage>Must be valid password</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={!!errors.confirm}>
              <Input
                isInvalid={!!errors.confirm}
                placeholder="Confirm Password"
                backgroundColor={"white"}
                w="85%"
                type={"password"}
                {...register("confirm", { required: true })}
              ></Input>
              {!!errors.confirm && (
                <FormErrorMessage>Must match password</FormErrorMessage>
              )}
            </FormControl>
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
