-- CreateEnum
CREATE TYPE "GenderEnum" AS ENUM ('male', 'female', 'not binary');

-- CreateEnum
CREATE TYPE "BankEnum" AS ENUM ('checking', 'saving', 'payment');

-- CreateEnum
CREATE TYPE "FlagCardEnum" AS ENUM ('visa', 'mastercard', 'elo', 'hipercard', 'american-express', 'diners-club');

-- CreateEnum
CREATE TYPE "TypeCardEnum" AS ENUM ('credit', 'debit', 'credit-debit', 'pre-paid');

-- CreateEnum
CREATE TYPE "TypeOperEnum" AS ENUM ('deposit', 'withdraw', 'payment');

-- CreateEnum
CREATE TYPE "PixKeyEnum" AS ENUM ('random', 'email', 'cpf', 'cnpj', 'mobile');

-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "dateBorn" TIMESTAMP(3) NOT NULL,
    "documentCpf" TEXT NOT NULL,
    "gender" "GenderEnum" NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bank" (
    "id" SERIAL NOT NULL,
    "code" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "numberAccount" INTEGER NOT NULL,
    "agency" INTEGER NOT NULL,
    "typeAccount" "BankEnum" NOT NULL,
    "variation" INTEGER NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "accountId" INTEGER NOT NULL,

    CONSTRAINT "Bank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BankBox" (
    "id" SERIAL NOT NULL,
    "descript" TEXT NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,
    "goal" DOUBLE PRECISION,
    "expireDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "bankId" INTEGER NOT NULL,

    CONSTRAINT "BankBox_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Card" (
    "id" SERIAL NOT NULL,
    "flag" "FlagCardEnum" NOT NULL,
    "numberCard" TEXT NOT NULL,
    "securityCode" TEXT NOT NULL,
    "expireDate" TIMESTAMP(3) NOT NULL,
    "isTemp" BOOLEAN NOT NULL,
    "typeCard" "TypeCardEnum" NOT NULL,
    "cardLimit" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "bankId" INTEGER NOT NULL,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cash" (
    "id" SERIAL NOT NULL,
    "totalBalance" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "accountId" INTEGER NOT NULL,

    CONSTRAINT "Cash_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CashBox" (
    "id" SERIAL NOT NULL,
    "descript" TEXT NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,
    "goal" DOUBLE PRECISION,
    "expireDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "cashId" INTEGER NOT NULL,

    CONSTRAINT "CashBox_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InvoiceCard" (
    "id" SERIAL NOT NULL,
    "descript" TEXT NOT NULL,
    "installments" INTEGER NOT NULL,
    "currentInstall" INTEGER NOT NULL,
    "totalInvoice" DOUBLE PRECISION NOT NULL,
    "installValue" DOUBLE PRECISION NOT NULL,
    "isFinish" BOOLEAN NOT NULL,
    "discount" DOUBLE PRECISION,
    "interest" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "cardId" INTEGER NOT NULL,

    CONSTRAINT "InvoiceCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PixKey" (
    "id" SERIAL NOT NULL,
    "descipt" TEXT,
    "keyType" "PixKeyEnum" NOT NULL,
    "pixKey" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "bankId" INTEGER NOT NULL,

    CONSTRAINT "PixKey_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OperBank" (
    "id" SERIAL NOT NULL,
    "descript" TEXT NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,
    "typeOperation" "TypeOperEnum" NOT NULL,
    "isExternal" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "bankId" INTEGER NOT NULL,

    CONSTRAINT "OperBank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OperBankBox" (
    "id" SERIAL NOT NULL,
    "descript" TEXT NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,
    "typeOperation" "TypeOperEnum" NOT NULL,
    "isExternal" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "bankBoxId" INTEGER NOT NULL,

    CONSTRAINT "OperBankBox_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OperCash" (
    "id" SERIAL NOT NULL,
    "descript" TEXT NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,
    "typeOperation" "TypeOperEnum" NOT NULL,
    "isExternal" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "cashId" INTEGER NOT NULL,

    CONSTRAINT "OperCash_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OperCashBox" (
    "id" SERIAL NOT NULL,
    "descript" TEXT NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,
    "typeOperation" "TypeOperEnum" NOT NULL,
    "isExternal" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "cashBoxId" INTEGER NOT NULL,

    CONSTRAINT "OperCashBox_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OperInvoiceCard" (
    "id" SERIAL NOT NULL,
    "descript" TEXT NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,
    "typeOperation" "TypeOperEnum" NOT NULL,
    "isExternal" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "invoiceCardId" INTEGER NOT NULL,

    CONSTRAINT "OperInvoiceCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OperPixKey" (
    "id" SERIAL NOT NULL,
    "descript" TEXT NOT NULL,
    "receptPixKey" TEXT,
    "recepterName" TEXT,
    "balance" DOUBLE PRECISION NOT NULL,
    "typeOperation" "TypeOperEnum" NOT NULL,
    "isExternal" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "pixKeyId" INTEGER NOT NULL,

    CONSTRAINT "OperPixKey_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_email_key" ON "Account"("email");

-- AddForeignKey
ALTER TABLE "Bank" ADD CONSTRAINT "Bank_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BankBox" ADD CONSTRAINT "BankBox_bankId_fkey" FOREIGN KEY ("bankId") REFERENCES "Bank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_bankId_fkey" FOREIGN KEY ("bankId") REFERENCES "Bank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cash" ADD CONSTRAINT "Cash_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CashBox" ADD CONSTRAINT "CashBox_cashId_fkey" FOREIGN KEY ("cashId") REFERENCES "Cash"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InvoiceCard" ADD CONSTRAINT "InvoiceCard_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PixKey" ADD CONSTRAINT "PixKey_bankId_fkey" FOREIGN KEY ("bankId") REFERENCES "Bank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OperBank" ADD CONSTRAINT "OperBank_bankId_fkey" FOREIGN KEY ("bankId") REFERENCES "Bank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OperBankBox" ADD CONSTRAINT "OperBankBox_bankBoxId_fkey" FOREIGN KEY ("bankBoxId") REFERENCES "BankBox"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OperCash" ADD CONSTRAINT "OperCash_cashId_fkey" FOREIGN KEY ("cashId") REFERENCES "Cash"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OperCashBox" ADD CONSTRAINT "OperCashBox_cashBoxId_fkey" FOREIGN KEY ("cashBoxId") REFERENCES "CashBox"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OperInvoiceCard" ADD CONSTRAINT "OperInvoiceCard_invoiceCardId_fkey" FOREIGN KEY ("invoiceCardId") REFERENCES "InvoiceCard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OperPixKey" ADD CONSTRAINT "OperPixKey_pixKeyId_fkey" FOREIGN KEY ("pixKeyId") REFERENCES "PixKey"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
