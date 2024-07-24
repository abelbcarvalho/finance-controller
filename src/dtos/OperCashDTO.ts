import { TypeOperEnum } from "@enums/EnumTypeOper";

export interface OperCashDTO {
    cashId: number;
    descript: string;
    balance: number;
    typeOperation: TypeOperEnum;
    isExternal: boolean;
}
