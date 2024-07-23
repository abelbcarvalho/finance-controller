export class BankBox {
    public id: number = 0;
    public bankId: number = 0;
    public descript: string = "";
    public balance: number = 0;
    public goal?: number = 0;
    public espireDate?: Date;
    public createdAt!: Date;
    public updatedAt!: Date;
}
