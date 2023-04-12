/*
  Warnings:

  - You are about to drop the column `prof_picture` on the `Comments` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Comments" DROP CONSTRAINT "Comments_prof_picture_fkey";

-- AlterTable
ALTER TABLE "Comments" DROP COLUMN "prof_picture";

-- AlterTable
ALTER TABLE "games" ALTER COLUMN "status" SET DEFAULT false;
