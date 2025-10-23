import { IAtmDto } from "@/interfaces/Atm/IAtmDto.ts";
import { BankType } from "@/enums/Bank/BankType.ts";

export class DebugData_ATM {
	public static readonly ATMData: IAtmDto = {
		BankType: BankType.LIBERTY,
		Disabled: false,
		Broken: false
	};
}