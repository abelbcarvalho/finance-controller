import { FlagCardEnum } from "../utilities/enums/EnumFlagCard";
import { TypeCardEnum } from "../utilities/enums/EnumTypeCard";

export class Card
{
    public id: number;
    public flag: FlagCardEnum;
    public numberCard: string;
    public securityCode: string;
    public expireDate: Date;
    public isTemp: boolean;
    public typeCard: TypeCardEnum;
    public cardLimit?: number;
    public createdAt: Date;
    public updatedAt: Date;
}
