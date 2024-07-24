import { AccountDTO } from "@dtos/AccountDTO";

export interface IServiceAccount {
    createAccount(account: AccountDTO): Promise<Response>;
}
