import { AccountDTO } from "@dtos/AccountDTO";
import { IServiceAccount } from "@services/interfaces/IServiceAccount";
import { ServiceAccount } from "@services/ServiceAccount";
import { IControllerAccount } from "./interfaces/IControllerAccount";

export class AccountController implements IControllerAccount {
    private _service: IServiceAccount;

    constructor() {
        this._service = new ServiceAccount();
    }

    get service(): IServiceAccount {
        return this._service;
    }

    async createAccount(account: AccountDTO): Promise<Response> {
        return await this.service.createAccount(account);
    }
}
