import prisma from "@/lib/prisma";

import type { NextApiRequest, NextApiResponse } from 'next'
import todoForm from "@/components/todo-form";
import {Request, Response} from "next/dist/compiled/@edge-runtime/primitives/fetch";
import {NextRequest, NextResponse} from "next/server";
import {json} from "stream/consumers";

type ResponseData = {
    message: string
}

interface TodoData {
    todoText: String
}


/** Credit: Hanyu Lin
 *
 * import type { NextApiRequest, NextApiResponse } from "next";
 * import { getServerSession } from "next-auth/next";
 * import { authOptions } from "../auth/[...nextauth]";
 * import prisma from "../../../lib/prismadb";
 *
 * export default async function handler(
 *   req: NextApiRequest,
 *   res: NextApiResponse
 * ) {
 *   const session = await getServerSession(req, res, authOptions);
 *   //check seesion
 *   if (!session) {
 *     return res.status(401).json({ message: "Please signin to create a post." });
 *   }
 *   //Get User
 *   const prismaUser = await prisma?.user.findUnique({
 *     where: { email: session?.user?.email! },
 *   });
 *   if (req.method === "POST") {
 *     const title = req.body.title;
 *     //check the title
 *     if (!title) {
 *       return res.status(403).json({ message: "Empty input!" });
 *     }
 *     try {
 *       const result = await prisma?.post.create({
 *         data: {
 *           title,
 *           userId: prismaUser?.id!,
 *         },
 *       });
 *       res.status(200).json(result);
 *     } catch (error) {
 *       res.status(400).json({ err: "A error has occured when making a post" });
 *     }
 *   }
 * }
 */

export async function POST(req: NextRequest) {
    console.log(req.body, req.method);
    console.log("AD");

    try {
        await prisma?.todo.create({
                data: {
                    todo: (await req.json()).todoText,
                },
            },
        );
    } catch (e) {
        console.log("Error", e);

        return new NextResponse("No todo was gotten", {status: 500});
    }


    console.log("sadhkakdio")
    return new NextResponse("all went good", {status: 200});
}