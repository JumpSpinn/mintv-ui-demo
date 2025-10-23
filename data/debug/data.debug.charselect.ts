import { ICharacterSelectionData } from "@/interfaces/Character/ICharacterSelectionData.ts";

export class DebugData_CharSelect {
	public static readonly CharSelectData: ICharacterSelectionData = {
		AllowNewCharacter: true,
		Characters: [
			{
				CharacterId: 1,
				Firstname: "Kane",
				Lastname: "Black",
				Creation: 1709373815685,
				LastPlayed: 1709373815684,
				PlayTime: 123456,
				Locked: false,
				HeadShot: "https://cdn.vuetifyjs.com/images/cards/halcyon.png"
			},
			{
				CharacterId: 2,
				Firstname: "Max",
				Lastname: "Mustermann Blank",
				Creation: 1709373815685,
				LastPlayed: 1709373815684,
				PlayTime: 0,
				Locked: false,
				HeadShot: ""
			},
		]
	};
	public static readonly OfflineMessageData: string[] = [
		"ist dein Bart gewachsen [DEBUG]",
		"ist dein Makeup verblasst [DEBUG]",
		"wurdest du am MD gespawnt wegen eines Fehlers [DEBUG]",
		"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci corporis dicta laudantium neque nobis non quod repudiandae voluptatum. Blanditiis culpa dignissimos doloremque doloribus explicabo impedit inventore ipsa iusto ratione voluptatum."
	];
}