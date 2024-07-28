import { BankEnum } from "@enums/EnumBank";

export interface BankDTO {
    code: number;
    name: string;
    numberAccount: string;
    agency: string;
    typeAccount: BankEnum;
    variation: number;
    balance: number;
}
