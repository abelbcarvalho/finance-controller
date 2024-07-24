import { GenderEnum } from "@enums/EnumGender";

export class Account {
    public id: number = 0;
    public fullname: string = "";
    public dateBorn!: Date;
    public documentCpf: string = "";
    public gender: GenderEnum = GenderEnum.MALE;
    public username: string = "";
    public email?: string = "";
    public password: string = "";
    public createdAt!: Date;
    public updatedAt!: Date;
}
