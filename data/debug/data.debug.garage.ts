import { GarageType } from "@/enums/Vehicle/GarageType.ts";
import { IGarageDto } from "@/interfaces/Garage/IGarageDto.ts";
import { IGarageVehDto } from "@/interfaces/Garage/IGarageVehDto.ts";

export class DebugData_Garage {
	public static readonly GarageData: IGarageDto = {
		Id: 1,
		Type: GarageType.PUBLIC,
		MaxSpace: 10,
		OccupiedSpace: 1,
		Vehicles: [
			{
				RemoteId: 1,
				DbId: 1,
				Model: "cognoscenti",
				DisplayName: "Rebel",
				PlateTxt: "dEv1",
				Vin: "vInUndsOo1"
			},
			{
				RemoteId: 2,
				DbId: 2,
				Model: "emperor2",
				DisplayName: "Rebel",
				PlateTxt: "dEv2",
				Vin: "vInUndsOo2"
			},
			{
				RemoteId: 3,
				DbId: 3,
				Model: "issi5",
				DisplayName: "Rebel",
				PlateTxt: "dEv3",
				Vin: "vInUndsOo3"
			},
			{
				RemoteId: 88,
				DbId: 99,
				Model: "panto",
				DisplayName: "Rebel",
				PlateTxt: "dEv3",
				Vin: "vInUndsOo3"
			}
		]
	};
	public static readonly TestParkedInVehicles: IGarageVehDto[] = [
		{
			RemoteId: 4,
			DbId: 4,
			Model: "patriot2",
			DisplayName: "Pounder",
			PlateTxt: "dEv4",
			Vin: "vInUndsOo4"
		},
		{
			RemoteId: 5,
			DbId: 5,
			Model: "baller4",
			DisplayName: "Elegy GEIL",
			PlateTxt: "dEv5",
			Vin: "vInUndsOo5"
		}
	];
}