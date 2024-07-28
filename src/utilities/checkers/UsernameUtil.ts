import { UsernameError } from "@exceptions/UsernameError";

export const usernameCheck = (username: string): void => {
    const userReg = "^[a-z\._]{1}[a-z\._0-9]{3,32}$";

    const regex = new RegExp(userReg);

    if (!regex.test(username)) {
        throw new UsernameError("username format or length invalid", 400)
    }
};
