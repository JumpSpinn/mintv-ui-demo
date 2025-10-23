import { IModal } from "@/interfaces/IModal.ts";
import { Key } from "@/enums/Key.ts";

export class DebugData_Modal {
	public static readonly ModalCancelKey: Key = Key.NUM_PAD0;
	public static readonly ModalData: IModal = {
		Title: "Geldübergabe",
		SubTitle: "Jemand möchte dir $50,00 übergeben",
		Options: [
			{
				Id: 0,
				Style: 0,
				Text: "Annehmen"
			},
			{
				Id: 1,
				Style: 1,
				Text: "Doppelt zurückgeben"
			},
			{
				Id: 3,
				Style: 3,
				Text: "Ins Gesicht spucken"
			},
			{
				Id: 2,
				Style: 2,
				Text: "Ablehnen"
			}
		]
	};
}