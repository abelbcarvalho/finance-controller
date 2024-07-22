import { GenderEnum } from "../utilities/enums/EnumGender";

export class Account
{
    public fullname: string;
    public dateBorn: Date;
    public documentCpf: string;
    public gender: GenderEnum;
    public username: string;
    public email?: string;
    public password: string;
    public createdAt: Date;
    public updatedAt: Date;
}