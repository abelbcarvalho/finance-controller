export class CashBox {
    public id: number = 0;
    public cashId: number = 0;
    public descript: string = "";
    public balance: number = 0;
    public goal?: number = 0;
    public expireDate?: number = 0;
    public createdAt!: Date;
    public updatedAt!: Date;
}
