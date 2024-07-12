import { z } from "zod";

const subjectSchema = z.object({
  english: z.number().min(0, { message: "半角で入力してください" }),
  math: z.number().min(0, { message: "半角で入力してください" }),
  socialStudies: z.number().min(0, { message: "半角で入力してください" }),
});

const studentSchema = z.object({
  name: z.string().min(1, { message: "名前は必須項目です" }),
  subjectSchema: subjectSchema,
  hobby: z.array(z.string().min(0, { message: "趣味は必須項目です" })),
});

