/*
  Warnings:

  - Changed the type of `cnpj` on the `loja` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `quantidade_filiais` on the `loja` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "loja" DROP COLUMN "cnpj",
ADD COLUMN     "cnpj" INTEGER NOT NULL,
DROP COLUMN "quantidade_filiais",
ADD COLUMN     "quantidade_filiais" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "loja_cnpj_key" ON "loja"("cnpj");
