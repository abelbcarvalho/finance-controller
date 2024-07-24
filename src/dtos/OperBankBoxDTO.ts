import { TypeOperEnum } from "@enums/EnumTypeOper";

export interface OperBankBoxDTO {
    bankBoxId: number;
    descript: string;
    balance: number;
    typeOperation: TypeOperEnum;
    isExternal: boolean;
}
