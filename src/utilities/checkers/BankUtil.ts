import { BankError } from "@exceptions/BankError";

export const checkBankNumberAccount = (bankNum: string): void => {
    const bankReg = "^[0-9]{8,12}$"

    const regex = new RegExp(bankReg);

    if (!regex.test(bankNum)) {
        throw new BankError("bank account number invalid", 400);
    }
};

export const checkBankAgency = (bankNum: string): void => {
    const bankReg = "^[0-9]{4,5}$"

    const regex = new RegExp(bankReg);

    if (!regex.test(bankNum)) {
        throw new BankError("bank agency number invalid", 400);
    }
};
