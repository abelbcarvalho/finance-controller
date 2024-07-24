import { FlagCardEnum } from "@enums/EnumFlagCard";
import { TypeCardEnum } from "@enums/EnumTypeCard";

export class Card {
    public id: number = 0;
    public bankId: number = 0;
    public flag: FlagCardEnum = FlagCardEnum.AMEX;
    public numberCard: string = "";
    public securityCode: string = "";
    public expireDate!: Date;
    public isTemp: boolean = false;
    public typeCard: TypeCardEnum = TypeCardEnum.DEBIT;
    public cardLimit?: number = 0;
    public createdAt!: Date;
    public updatedAt!: Date;
}
