import { ConvertTempType } from "../types";

export const convertTemp: ConvertTempType =  (temp, unit) => {
    return unit === "C" ? temp : (temp * 9) / 5 + 32;
};