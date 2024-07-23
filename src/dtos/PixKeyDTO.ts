import { PixKeyEnum } from "../utilities/enums/EnumPixKey"

export interface PixKeyDTO {
    bankId: number;
    descipt?: string;
    keyType: PixKeyEnum;
    pixKey: string;
}
