import { Operation } from "./Operation";


export class OperPixKey extends Operation
{
    public id: number;
    public pixKeyId: number;
    public receptPixKey?: string;
    public recepterName?: string;
    public createdAt: Date;
    public updatedAt: Date;
}
