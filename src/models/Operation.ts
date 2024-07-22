import { TypeOperEnum } from "../utilities/enums/EnumTypeOper";


export abstract class Operation
{
    public descript: string;
    public balance: number;
    public typeOperation: TypeOperEnum;
    public isEternal: boolean = false;   
}
