import { CpfError } from "../../exceptions/CpfError";

const checkRegexCPF = (cpf: string): void => {
    const regexCpf = "^[0-9]{11}$";

    const regex = new RegExp(regexCpf);

    const matched = regex.test(cpf);

    if (!matched)
        throw new CpfError("document cpf doesn't match to the partern", 400);
};


const checkCalcCPF = (cpf: string): void => {
    const nineDigits = cpf.substring(0, 9).split("").reverse();
    const tenDigits = cpf.substring(0, 10).split("").reverse();

    const firstDigit = (stop: number = 2) => {
        let addition = 0;

        nineDigits.forEach((digit) => {
            const nDigit = parseInt(digit);

            addition += nDigit * stop;

            stop += 1;
        });

        const rest = addition % 11;

        let checkD = 0;

        if ([0, 1].includes(rest)) {
            checkD = 0;
        } else {
            checkD = 11 - rest;
        }

        return parseInt(checkD.toString());
    };

    const secondDigit = (stop: number = 2) => {
        let addition = 0;

        tenDigits.forEach((digit) => {
            const nDigit = parseInt(digit);

            addition += nDigit * stop;

            stop += 1;
        });

        const rest = addition % 11;

        let checkD = 0;

        if ([0, 1].includes(rest)) {
            checkD = 0;
        } else {
            checkD = 11 - rest;
        }

        return parseInt(checkD.toString());
    };

    const digits: string = [firstDigit(), secondDigit()].join("");
    const toCheck: string = cpf.substring(9, 11);

    if (digits != toCheck)
        throw new CpfError("it was found one or both invalid check digit for cpf", 400);
};
