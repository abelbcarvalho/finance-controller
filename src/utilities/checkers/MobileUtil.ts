import { MobileError } from "@exceptions/MobileError";

export const checkMobileNumber = (mobile: string): void => {
    const mobileReg = "^[+][0-9]{13}$";

    const regex = new RegExp(mobileReg);

    if (!regex.test(mobile)) {
        throw new MobileError("mobile number format is invalid", 400);
    }
};
