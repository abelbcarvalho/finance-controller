import { Operation } from "./Operation";

export class OperInvoiceCard extends Operation {
    public id: number = 0;
    public invoiceCardId: number = 0;
    public createdAt!: Date;
    public updatedAt!: Date;
}
