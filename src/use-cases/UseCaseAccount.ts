import { AccountDTO } from "@dtos/AccountDTO";
import { IUseCaseAccount } from "./interfaces/IUseCaseAccount";

export class UseCaseAccount implements IUseCaseAccount {
    constructor()
    {}

    async execute(account: AccountDTO): Promise<Response> {
        throw new Error("Method not implemented.");
    }
}