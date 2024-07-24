import { TypeOperEnum } from "@enums/EnumTypeOper";

export interface OperCashBoxDTO {
    cashBoxId: number;
    descript: string;
    balance: number;
    typeOperation: TypeOperEnum;
    isExternal: boolean;
}
