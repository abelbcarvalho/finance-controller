import { AccountDTO } from "@dtos/AccountDTO";
import { IServiceAccount } from "./interfaces/IServiceAccount";
import { IUseCaseAccount } from "@use-cases/interfaces/IUseCaseAccount";
import { UseCaseAccount } from "@use-cases/UseCaseAccount";

export class ServiceAccount implements IServiceAccount {
    private _use_case: IUseCaseAccount;

    constructor() {
        this._use_case = new UseCaseAccount();
    }

    get use_case(): IUseCaseAccount {
        return this._use_case;
    }

    async createAccount(account: AccountDTO): Promise<Response> {
        return await this.use_case.execute(account);
    }
}
