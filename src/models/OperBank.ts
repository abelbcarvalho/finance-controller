import { Operation } from "./Operation";


export class OperBank extends Operation
{
    public id: number;
    public bankId: number;
    public createdAt: Date;
    public updatedAt: Date;
}
