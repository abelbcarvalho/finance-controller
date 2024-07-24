import { TypeOperEnum } from "../utilities/enums/EnumTypeOper";

export interface OperPixKeyDTO {
    pixKeyId: number;
    receptPixKey?: string;
    recepterName?: string;
    descript: string;
    balance: number;
    typeOperation: TypeOperEnum;
    isExternal: boolean;
}