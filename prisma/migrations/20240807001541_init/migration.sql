/*
  Warnings:

  - You are about to drop the column `data_e_hora_abertura` on the `loja` table. All the data in the column will be lost.
  - Made the column `name` on table `usuario` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "loja" DROP COLUMN "data_e_hora_abertura",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "usuario" ALTER COLUMN "name" SET NOT NULL;
