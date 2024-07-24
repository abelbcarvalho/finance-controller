import { EmailError } from "@exceptions/EmailError";

const checkEmail = (email: string): void => {
    const regexEmail = "^[a-z\-_0-9]{1}[a-z\-_0-9.\+]{0,62}[a-z\-_0-9]{1}\@[a-z\-_0-9]{1}[a-z\-_0-9.\+]{0,177}\.[a-z]{2,10}$";

    const regex = new RegExp(regexEmail);

    if (!regex.test(email)) {
        throw new EmailError("this email doesn't matches to the partern", 400);
    }
};
