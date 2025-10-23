import { IWasted } from "@/interfaces/Character/IWasted.ts";

export class DebugData_Wasted {
	public static readonly wastedDeath : IWasted = {
		remainingTime: 15 * 60 * 1_000,
		permDeath: false
	};
}