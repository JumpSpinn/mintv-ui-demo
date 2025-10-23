import { ILockPickVehicleDto } from "@/interfaces/Minigames/ILockPickVehicleDto.ts";
import { LockPickDifficulty } from "@/enums/LockPickDifficulty.ts";

export class DebugData_LockPick {
	public static readonly LockPickVehicle: ILockPickVehicleDto = {
		Pins: 5, 
		Difficulty: LockPickDifficulty.EASY
	};
}