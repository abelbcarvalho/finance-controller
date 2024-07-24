import { FlagCardEnum } from "@enums/EnumFlagCard";
import { TypeCardEnum } from "@enums/EnumTypeCard";

export interface CardDTO {
    flag: FlagCardEnum;
    numberCard: string;
    securityCode: string;
    expireDate: Date;
    isTemp: boolean;
    typeCard: TypeCardEnum;
    cardLimit?: number;
}
