import { PrismaClient } from '../generated/prisma/index.js';

const globalforprisma = globalThis;

export const db = globalforprisma.prisma || new PrismaClient();

if (!process.env.NODE_ENV !== 'production'){
    globalforprisma.prisma = db
}