import { BankEnum } from "../utilities/enums/EnumBank";

export class Bank
{
    public id: number;
    public code: number;
    public name: string;
    public numberAccount: number;
    public agency: number;
    public typeAccount: BankEnum;
    public variation: number;
    public balance: number;
    public createdAt: Date;
    public updatedAt: Date;
}