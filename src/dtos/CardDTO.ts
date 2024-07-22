import { FlagCardEnum } from "../utilities/enums/EnumFlagCard";
import { TypeCardEnum } from "../utilities/enums/EnumTypeCard";


export interface CardDTO
{
    flag: FlagCardEnum;
    numberCard: string;
    securityCode: string;
    expireDate: Date;
    isTemp: boolean;
    typeCard: TypeCardEnum;
    cardLimit?: number;
}
