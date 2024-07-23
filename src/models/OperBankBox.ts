import { Operation } from "./Operation";

export class OperBankBox  extends Operation {
    public id: number = 0;
    public bankBoxId: number = 0;
    public createdAt!: Date;
    public updatedAt!: Date;
}
