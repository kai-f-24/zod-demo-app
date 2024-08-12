import { z } from "zod";

const subjectSchema = z.object({
  english: z.number().min(0, "半角で入力してください"),
  math: z.number().min(0, "半角で入力してください"),
  socialStudies: z.number().min(0, "半角で入力してください"),
});

export const studentSchema = z.object({
  name: z.string().min(1, "名前は必須項目です"),
  subject: subjectSchema,
  hobby: z.array(z.string().min(1)).nonempty("趣味は必須項目です"),
});
