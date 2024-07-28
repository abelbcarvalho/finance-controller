export class MobileError extends Error {
    public status_code?: number;

    constructor(message: string,  status_code?: number) {
        super();
        this.name = "MobileError";
        this.message = message;
        this.status_code = status_code;
    }
}
