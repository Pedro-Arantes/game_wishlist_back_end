-- AlterTable
ALTER TABLE "games" ALTER COLUMN "status" SET DEFAULT false;

-- CreateTable
CREATE TABLE "ProfPictures" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "picture" TEXT NOT NULL,

    CONSTRAINT "ProfPictures_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProfPictures" ADD CONSTRAINT "ProfPictures_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
