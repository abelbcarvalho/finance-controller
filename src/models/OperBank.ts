import { Operation } from "./Operation";

export class OperBank extends Operation {
    public id: number = 0;
    public bankId: number = 0;
    public createdAt!: Date;
    public updatedAt!: Date;
}
