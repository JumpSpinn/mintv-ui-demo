import { IKeyHelpData } from "@/interfaces/IKeyHelpData.ts";
import { Key } from "@/enums/Key.ts";

export class DebugData_KeyHelp {
	public static readonly KeyHelpData: IKeyHelpData[] = [
		{
			Id: 1,
			Key: Key.ENTER,
			Text: "Bestätigen"
		},
		{
			Id: 2,
			Key: Key.SPACEBAR,
			Text: "Springen"
		},
		{
			Id: 3,
			Key: Key.MOUSE_LEFT,
			Text: "Auswählen"
		},
		{
			Id: 4,
			Key: Key.MOUSE_MIDDLE,
			Text: "Scrollen"
		},
		{
			Id: 5,
			Key: Key.MOUSE_RIGHT,
			Text: "Context Menü"
		},
	];
}