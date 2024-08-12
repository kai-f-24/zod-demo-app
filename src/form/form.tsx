import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Box,
  Checkbox,
} from "@chakra-ui/react";
import { studentSchema } from "../zod/zod";

type FormData = z.infer<typeof studentSchema>;

function Form() {
  // useFormの初期化
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(studentSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <Box maxWidth="400px" mx="auto" mt="5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!errors.name} mb="4">
          <FormLabel htmlFor="name">名前</FormLabel>
          <Input
            id="name"
            placeholder="名前を入力してください"
            {...register("name")}
          />
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.subject?.english} mb="4">
          <FormLabel htmlFor="english">英語</FormLabel>
          <Input
            id="english"
            placeholder="点数を入力してください"
            {...register("subject.english", { valueAsNumber: true })}
          />
          <FormErrorMessage>
            {errors.subject?.english?.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.subject?.math} mb="4">
          <FormLabel htmlFor="math">数学</FormLabel>
          <Input
            id="math"
            placeholder="点数を入力してください"
            {...register("subject.math", { valueAsNumber: true })}
          />
          <FormErrorMessage>{errors.subject?.math?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.subject?.socialStudies} mb="4">
          <FormLabel htmlFor="socialStudies">社会</FormLabel>
          <Input
            id="socialStudies"
            placeholder="点数を入力してください"
            {...register("subject.socialStudies", { valueAsNumber: true })}
          />
          <FormErrorMessage>
            {errors.subject?.socialStudies?.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.hobby}>
          <FormLabel htmlFor="hobby">趣味</FormLabel>
          <Checkbox value="reading" {...register("hobby")}>
            読書
          </Checkbox>
          <Checkbox value="sports" {...register("hobby")}>
            スポーツ
          </Checkbox>
          <Checkbox value="music" {...register("hobby")}>
            音楽
          </Checkbox>
          <FormErrorMessage>{errors.hobby?.message}</FormErrorMessage>
        </FormControl>

        <Button type="submit" colorScheme="blue">
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default Form;
