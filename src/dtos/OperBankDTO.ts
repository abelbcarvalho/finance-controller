import { TypeOperEnum } from "@enums/EnumTypeOper";

export interface OperBankDTO {
    bankId: number;
    descript: string;
    balance: number;
    typeOperation: TypeOperEnum;
    isExternal: boolean;
}
