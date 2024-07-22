export class Decimal
{
    private _value: string;
    private _integer: number = 0;
    private _decimal: number = 0;
    private _tenExpoent: number = 0;

    constructor(value: string | number)
    {
        this._value = value.toString();
        this.extract();
    }

    private get value(): string
    {return this._value;}

    private set value(value: string)
    {this._value = value;}

    get integer(): number
    {return this._integer;}

    set integer(int: number)
    {this._integer = int;}

    get decimal(): number
    {return this._decimal;}

    set decimal(dec: number)
    {this._decimal = dec}

    get tenExpoent(): number
    {return this._tenExpoent;}

    set tenExpoent(tenExpoent: number)
    {this._tenExpoent = tenExpoent;}

    protected extract(): void
    {
        const [ int, dec ] = this.value.split(".");

        this.integer = parseInt(int);
        this.decimal = parseInt(dec);

        this.tenExpoent = dec.length;
    }
}
