import { PixKeyEnum } from "../utilities/enums/EnumPixKey"

export class PixKey {
    public id: number = 0;
    public bankId: number = 0;
    public descipt?: string;
    public keyType: PixKeyEnum = PixKeyEnum.RANDOM;
    public pixKey: string = "";
    public createdAt!: Date;
    public updatedAt!: Date;
}
