import { GenderEnum } from "../utilities/enums/EnumGender";

export interface AccountDTO {
    fullname: string;
    dateBorn: Date;
    documentCpf: string;
    gender: GenderEnum;
    username: string;
    email?: string;
    password: string;
}
