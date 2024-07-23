import { Operation } from "./Operation";

export class OperPixKey extends Operation {
    public id: number = 0;
    public pixKeyId: number = 0;
    public receptPixKey?: string;
    public recepterName?: string;
    public createdAt!: Date;
    public updatedAt!: Date;
}
