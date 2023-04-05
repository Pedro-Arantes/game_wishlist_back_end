/*
  Warnings:

  - You are about to drop the column `user_id` on the `ProfPictures` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProfPictures" DROP CONSTRAINT "ProfPictures_user_id_fkey";

-- AlterTable
ALTER TABLE "ProfPictures" DROP COLUMN "user_id";

-- AlterTable
ALTER TABLE "games" ALTER COLUMN "status" SET DEFAULT false;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "prof_picture" INTEGER DEFAULT 1;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_prof_picture_fkey" FOREIGN KEY ("prof_picture") REFERENCES "ProfPictures"("id") ON DELETE SET NULL ON UPDATE CASCADE;
