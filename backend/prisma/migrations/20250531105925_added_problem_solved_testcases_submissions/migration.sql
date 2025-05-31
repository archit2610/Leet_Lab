/*
  Warnings:

  - You are about to drop the column `updatedAr` on the `PROBLEM` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `PROBLEM` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PROBLEM" DROP COLUMN "updatedAr",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "SUBMISSION" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "problemId" TEXT NOT NULL,
    "sourceCode" JSONB NOT NULL,
    "laguage" TEXT NOT NULL,
    "stdin" TEXT,
    "stdout" TEXT,
    "stderr" TEXT,
    "compileOutput" TEXT,
    "status" TEXT NOT NULL,
    "memory" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SUBMISSION_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TESTCASERESULT" (
    "id" TEXT NOT NULL,
    "submissionID" TEXT NOT NULL,
    "testCase" INTEGER NOT NULL,
    "passed" BOOLEAN NOT NULL,
    "stdin" TEXT,
    "stdout" TEXT,
    "stderr" TEXT,
    "expoectedOutput" TEXT,
    "compileOutput" TEXT,
    "status" TEXT NOT NULL,
    "memory" TEXT,
    "time" TEXT,

    CONSTRAINT "TESTCASERESULT_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PROBLEMSOLVED" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "problemId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PROBLEMSOLVED_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "TESTCASERESULT_submissionID_idx" ON "TESTCASERESULT"("submissionID");

-- CreateIndex
CREATE UNIQUE INDEX "PROBLEMSOLVED_userId_problemId_key" ON "PROBLEMSOLVED"("userId", "problemId");

-- AddForeignKey
ALTER TABLE "SUBMISSION" ADD CONSTRAINT "SUBMISSION_userId_fkey" FOREIGN KEY ("userId") REFERENCES "USER"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SUBMISSION" ADD CONSTRAINT "SUBMISSION_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "PROBLEM"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TESTCASERESULT" ADD CONSTRAINT "TESTCASERESULT_submissionID_fkey" FOREIGN KEY ("submissionID") REFERENCES "SUBMISSION"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PROBLEMSOLVED" ADD CONSTRAINT "PROBLEMSOLVED_userId_fkey" FOREIGN KEY ("userId") REFERENCES "USER"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PROBLEMSOLVED" ADD CONSTRAINT "PROBLEMSOLVED_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "PROBLEM"("id") ON DELETE CASCADE ON UPDATE CASCADE;
