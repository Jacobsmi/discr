import { Prisma } from "@prisma/client";

export type SignupArgs = Omit<Prisma.UserCreateArgs["data"], "id">;
