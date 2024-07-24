export class CpfError extends Error {
    public readonly name: string;
    public readonly statusCode?: number;

    constructor(message: string, statusCode?: number) {
        super(message);
        this.name = "CpfError";
        this.statusCode = statusCode;
    }
}
