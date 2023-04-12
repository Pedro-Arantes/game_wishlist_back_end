-- AlterTable
ALTER TABLE "games" ALTER COLUMN "status" SET DEFAULT false;

-- CreateTable
CREATE TABLE "Comments" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "prof_picture" INTEGER NOT NULL,

    CONSTRAINT "Comments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_prof_picture_fkey" FOREIGN KEY ("prof_picture") REFERENCES "ProfPictures"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
