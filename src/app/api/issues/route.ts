import prisma from "@/lib/dbClient";
import { CreateIssueSchema, TCreateIssueInput } from "@/schemas/issues.schema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body: TCreateIssueInput = await req.json();
        const validate = CreateIssueSchema.safeParse(body);
        if (!validate.success) {
            return NextResponse.json(
                {
                    status: "ERROR",
                    message: "bad request",
                    errors: validate.error.errors,
                },
                { status: 422 }
            );
        }

        const newIssue = await prisma.issue.create({
            data: {
                title: body.title,
                description: body.description,
            },
        });

        return NextResponse.json({
            status: "OK",
            message: "issue created successfully",
            data: newIssue,
        });
    } catch (error) {
        console.log("error :", error);
        return NextResponse.json(
            { status: "ERROR", message: "something went wrong", error },
            { status: 500 }
        );
    }
}
