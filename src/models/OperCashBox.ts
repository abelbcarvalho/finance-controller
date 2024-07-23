import { Operation } from "./Operation";

export class OperCashBox extends Operation {
    public id: number = 0;
    public cashBoxId: number = 0;
    public createdAt!: Date;
    public updatedAt!: Date;
}
