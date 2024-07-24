import { TypeOperEnum } from "@enums/EnumTypeOper";

export interface OperInvoiceCardDTO {
    invoiceCardId: number;
    descript: string;
    balance: number;
    typeOperation: TypeOperEnum;
    isExternal: boolean;
}
