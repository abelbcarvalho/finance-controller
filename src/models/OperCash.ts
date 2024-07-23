import { Operation } from "./Operation";

export class OperCash  extends Operation {
    public id: number = 0;
    public cashId: number = 0;
    public createdAt!: Date;
    public updatedAt!: Date;
}
