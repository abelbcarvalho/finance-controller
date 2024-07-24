import { AccountDTO } from "@dtos/AccountDTO";

export interface IControllerAccount {
    createAccount(account: AccountDTO): Promise<Response>;
}
