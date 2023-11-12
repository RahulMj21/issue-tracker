import { z } from "zod";

export const CreateIssueSchema = z.object({
    title: z
        .string({ required_error: "This is a required field." })
        .trim()
        .min(1, "This is a required field.")
        .max(255, "title must conatain less than 255 characters."),
    description: z
        .string({ required_error: "This is a required field." })
        .trim()
        .min(1, "This is a required field."),
});

export type TCreateIssueInput = z.infer<typeof CreateIssueSchema>;
