import { PixKeyEnum } from "../utilities/enums/EnumPixKey"

export class PixKey
{
    public id: number;
    public bankId: number;
    public descipt?: string;
    public keyType: PixKeyEnum;
    public pixKey: string;
    public createdAt: Date;
    public updatedAt: Date;
}
