export class InvoiceCard {
    public id: number = 0;
    public cardId: number = 0;
    public descript: string = "";
    public installments: number = 0;
    public currentInstall: number = 0;
    public totalInvoice: number = 0;
    public installValue: number = 0;
    public isFinish: boolean = false;
    public discount?: number;
    public interest?: number;
    public createdAt!: Date;
    public updatedAt!: Date;
}
