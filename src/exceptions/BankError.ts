export class BankError extends Error {
    public status_code?: number;

    constructor(message: string, status_code?: number) {
        super();
        this.name = "BankError";
        this.message = message;
        this.status_code = status_code;
    }
}
