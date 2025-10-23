import { PedClothesComponent } from "@/enums/Character/PedClothesComponent.ts";
import { Gender } from "@/enums/Character/Gender.ts";
import { IShopClothingItem } from "@/interfaces/Shops/IShopClothingItem.ts";
import { ClothingColor } from "@/enums/Shops/ClothingColor.ts";

export class DebugData_ClothingShop {
	public static readonly Clothings: IShopClothingItem[] = [
		// MALE
		{
			Id: "m1",
			Name: "Geile Hose",
			Icon: "cloth/male/leg/171_0.png",
			Price: 100,
			Component: PedClothesComponent.LEGS,
			Colors: [ClothingColor.WHITE, ClothingColor.BLACK],
			Gender: Gender.MALE
		},
		
		// FEMALE
		{
			Id: "f1",
			Name: "Knorke Shirt",
			Icon: "cloth/female/shirt/532_12.png",
			Price: 200,
			Component: PedClothesComponent.UNDERSHIRT,
			Colors: [ClothingColor.RED, ClothingColor.GREEN],
			Gender: Gender.FEMALE
		}
	];
}