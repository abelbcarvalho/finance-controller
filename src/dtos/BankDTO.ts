import { BankEnum } from "@enums/EnumBank";

export interface BankDTO {
    code: number;
    name: string;
    numberAccount: number;
    agency: number;
    typeAccount: BankEnum;
    variation: number;
    balance: number;
}
