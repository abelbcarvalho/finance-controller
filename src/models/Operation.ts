import { TypeOperEnum } from "@enums/EnumTypeOper";

export abstract class Operation {
    public descript: string = "";
    public balance: number = 0;
    public typeOperation: TypeOperEnum = TypeOperEnum.PAYMENT;
    public isExternal: boolean = false;   
}
