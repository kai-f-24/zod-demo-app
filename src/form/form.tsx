import {
  Box,
  Checkbox,
  CheckboxGroup,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  Input,
} from "@chakra-ui/react";
import { hobby } from "../data/hobby";

const Form = () => {
  return (
    <FormControl>
      <FormLabel>name</FormLabel>
      <Input />
      <Flex>
        <Box>
          <FormLabel>english</FormLabel>
          <Input />
        </Box>

        <Box>
          <FormLabel>math</FormLabel>
          <Input />
        </Box>

        <Box>
          <FormLabel>social studies</FormLabel>
          <Input />
        </Box>
      </Flex>
      {hobby.map((item) => (
        <>
          <FormLabel>{Object.keys(item)[0]}</FormLabel>
          <Input key={Object.keys(item)[0]} />
        </>
      ))}
    </FormControl>
  );
};

export default Form;
