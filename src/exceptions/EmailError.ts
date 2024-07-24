export class EmailError extends Error {
    public readonly name: string;
    public readonly statusCode?: number;

    constructor(message: string, statusCode?: number) {
        super(message);
        this.name = "EmailError";
        this.statusCode = statusCode;
    }
}
