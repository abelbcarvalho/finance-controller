export class InvoiceCard
{
    public id: number;
    public cardId: number;
    public descript: string;
    public installments: number;
    public currentInstall: number;
    public totalInvoice: number;
    public installValue: number;
    public isFinish: boolean = false;
    public discount?: number;
    public interest?: number;
    public createdAt: Date;
    public updatedAt: Date;
}
