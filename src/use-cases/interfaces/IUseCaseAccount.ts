import { AccountDTO } from "@dtos/AccountDTO";

export interface IUseCaseAccount {
    execute(account: AccountDTO): Promise<Response>;
}
