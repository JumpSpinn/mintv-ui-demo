import { ITattoo } from "@/interfaces/Tattoo/ITattoo.ts";
import { TattooZone } from "@/enums/Tattoo/TattooZone.ts";
import { TattooSize } from "@/enums/Tattoo/TattooSize.ts";

export class DebugData_Tattoo {
	public static readonly Tattoos: ITattoo[] = [
		{ Price: 1_00, Name: "Debug Tattoo 1", Zone: TattooZone.HEAD, Size: TattooSize.SMALL },
		{ Name: "Debug Tattoo 2", Zone: TattooZone.TORSO, Size: TattooSize.SMALL },
		{ Price: 100_00, Name: "Debug Tattoo 3", Zone: TattooZone.TORSO_FRONT, Size: TattooSize.SMALL },
		{ Price: 1000_00, Name: "Debug Tattoo 4", Zone: TattooZone.TORSO_BACK, Size: TattooSize.SMALL },
		{ Price: 2000_00, Name: "Debug Tattoo 5", Zone: TattooZone.LEFT_ARM, Size: TattooSize.SMALL },
		{ Name: "Debug Tattoo 6", Zone: TattooZone.RIGHT_ARM, Size: TattooSize.SMALL },
		{ Price: 4000_00, Name: "Debug Tattoo 7", Zone: TattooZone.LEFT_LEG, Size: TattooSize.SMALL },
		{ Price: 5000_00, Name: "Debug Tattoo 8", Zone: TattooZone.RIGHT_LEG, Size: TattooSize.SMALL },
		
		{ Price: 6_00, Name: "Debug Tattoo 9", Zone: TattooZone.HEAD, Size: TattooSize.MIDDLE },
		{ Price: 70_00, Name: "Debug Tattoo 10", Zone: TattooZone.TORSO, Size: TattooSize.MIDDLE },
		{ Name: "Debug Tattoo 11", Zone: TattooZone.TORSO_FRONT, Size: TattooSize.MIDDLE },
		{ Price: 9000_00, Name: "Debug Tattoo 12", Zone: TattooZone.TORSO_BACK, Size: TattooSize.MIDDLE },
		{ Price: 1100_00, Name: "Debug Tattoo 13", Zone: TattooZone.LEFT_ARM, Size: TattooSize.MIDDLE },
		{ Price: 1200_00, Name: "Debug Tattoo 14", Zone: TattooZone.RIGHT_ARM, Size: TattooSize.MIDDLE },
		{ Price: 1300_00, Name: "Debug Tattoo 15", Zone: TattooZone.LEFT_LEG, Size: TattooSize.MIDDLE },
		{ Price: 1400_00, Name: "Debug Tattoo 16", Zone: TattooZone.RIGHT_LEG, Size: TattooSize.MIDDLE },
		
		{ Price: 5_00, Name: "Debug Tattoo 17", Zone: TattooZone.HEAD, Size: TattooSize.BIG },
		{ Price: 50_00, Name: "Debug Tattoo 18", Zone: TattooZone.TORSO, Size: TattooSize.BIG },
		{ Price: 500_00, Name: "Debug Tattoo 19", Zone: TattooZone.TORSO_FRONT, Size: TattooSize.BIG },
		{ Price: 5000_00, Name: "Debug Tattoo 20", Zone: TattooZone.TORSO_BACK, Size: TattooSize.BIG },
		{ Name: "Debug Tattoo 21", Zone: TattooZone.LEFT_ARM, Size: TattooSize.BIG },
		{ Price: 5200_00, Name: "Debug Tattoo 22", Zone: TattooZone.RIGHT_ARM, Size: TattooSize.BIG },
		{ Price: 5300_00, Name: "Debug Tattoo 23", Zone: TattooZone.LEFT_LEG, Size: TattooSize.BIG },
		{ Price: 5400_00, Name: "Debug Tattoo 24", Zone: TattooZone.RIGHT_LEG, Size: TattooSize.BIG },
	];
}