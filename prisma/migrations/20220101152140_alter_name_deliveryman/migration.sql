/*
  Warnings:

  - You are about to drop the `deliveryMan` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "deliveryMan";

-- CreateTable
CREATE TABLE "delivery_man" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "delivery_man_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "delivery_man_username_key" ON "delivery_man"("username");
