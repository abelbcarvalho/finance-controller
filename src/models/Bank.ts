import { BankEnum } from "@enums/EnumBank";

export class Bank {
    public id: number = 0;
    public code: number = 0;
    public name: string = "";
    public numberAccount: number = 0;
    public agency: number = 0;
    public typeAccount: BankEnum = BankEnum.CHECKING;
    public variation: number = 0;
    public balance: number = 0;
    public createdAt!: Date;
    public updatedAt!: Date;
}
