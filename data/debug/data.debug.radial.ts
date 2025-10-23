import { IRadialMenuView } from "@/interfaces/Interaction/IRadialMenuView.ts";

export class DebugData_Radial {
	public static readonly MenuData: IRadialMenuView = {
		Title: "Fahrzeug",
		Interactions: [
			{
				FaIcon: "fa fa-engine",
				Label: "Motor",
				Id: 1
			},
			{
				Label: "Kofferraum auf/zu",
				Id: 2
			},
			{
				Id: 3,
				Label: "Mehrere Ordner",
				Sub: [
					{
						Id: 4,
						Label: "Ordner 1",
						Sub: [
							{
								Id: 4,
								Label: "Ordner 2",
								Sub: [
									{
										Id: 5,
										Label: "Ordner 3",
										Sub: [
											{
												Id: 6,
												Label: "Ordner 4",
												Sub: [
													{
														Label: "Ausführen",
														Id: 9723485
													}
												]
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				Id: 7,
				Label: "Türen steuern",
				Sub: [
					{
						Id: 8,
						Label: "Fahrer"
					},
					{
						Label: "Beifahrer",
						Id: 9
					},
					{
						Label: "Hinten links",
						Id: 10
					},
					{
						Label: "Hinten rechts",
						Id: 11
					}
				]
			},
			{
				Id: 12,
				Label: "Fenster steuern",
				Sub: [
					{
						Label: "Fahrer",
						Id: 13
					},
					{
						Label: "Beifahrer",
						Id: 14
					},
					{
						Label: "Hinten links",
						Id: 15
					},
					{
						Label: "Hinten rechts",
						Id: 16
					}
				]
			},
			{
				Label: "Anschnallen",
				Id: 17
			}
		]
	};
}