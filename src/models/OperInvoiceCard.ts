import { Operation } from "./Operation";


export class OperInvoiceCard extends Operation
{
    public id: number;
    public invoiceCardId: number;
    public createdAt: Date;
    public updatedAt: Date;
}
