/*
  Warnings:

  - Added the required column `game_id` to the `Comments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comments" ADD COLUMN     "game_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "games" ALTER COLUMN "status" SET DEFAULT false;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "games"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
