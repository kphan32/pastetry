-- CreateTable
CREATE TABLE "Paste" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nanoId" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "Paste_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Paste_nanoId_key" ON "Paste"("nanoId");
