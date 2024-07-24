import { PixKeyEnum } from "@enums/EnumPixKey";

export interface PixKeyDTO {
    bankId: number;
    descipt?: string;
    keyType: PixKeyEnum;
    pixKey: string;
}
