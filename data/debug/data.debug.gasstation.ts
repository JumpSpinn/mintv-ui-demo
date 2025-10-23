import { IGasStationDto } from "@/enums/GasStation/IGasStationDto.ts";
import { FuelType } from "@/enums/Vehicle/FuelType.ts";

export class DebugData_GasStation {
	public static readonly GasStationData: IGasStationDto = {
		FuelTypes: [
			{
				FuelType: FuelType.SUPER,
				CustomPrice: 1_00,
				Capacity: 100_000
			},
			{
				FuelType: FuelType.SUPER_PLUS,
				CustomPrice: 2_00,
				Capacity: 100_000
			},
			{
				FuelType: FuelType.DIESEL,
				CustomPrice: 3_00,
				Capacity: 100_000
			},
			{
				FuelType: FuelType.ELECTRICITY,
				CustomPrice: 4_00,
				Capacity: 100_000
			}
		],
		VehCurrentFuel: 1_000,
		VehFuelCapacity: 50_000,
		VehFuelType: FuelType.DIESEL
	};
}