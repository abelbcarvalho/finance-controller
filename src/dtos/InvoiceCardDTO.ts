export interface InvoiceCardDTO {
    cardId: number;
    descript: string;
    installments: number;
    currentInstall: number;
    totalInvoice: number;
    installValue: number;
    isFinish: boolean;
    discount?: number;
    interest?: number;
}
