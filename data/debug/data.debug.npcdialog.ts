import { INPCDialog } from "@/interfaces/Dialog/INPCDialog.ts";
import { NPCDialogAnswerColor } from "@/enums/NPCDialog/NPCDialogAnswerColor.ts";

export class DebugData_NPCDialog {
	public static readonly DialogData: INPCDialog = {
		Texts: [
			"Herzlich Willkommen",
			"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod" +
			"tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." +
			"At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren," +
			"no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet," +
			"consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore" +
			"magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea" +
			"rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
			"Also, wie kann ich dir heute behilflich sein?"
		],
		Answers: [
			{
				Text: "Fahrzeug ein- oder ausparken"
			},
			{
				Text: "Ich kann mein Fahrzeug nicht auffinden. Kannst du mir helfen?",
				Description: "Bevor du ein Ticket eröffnest und uns nervst LuL"
			},
			{
				Text: "Aktion 1"
			},
			{
				Text: "Aktion 2"
			},
			{
				Text: "Aktion 3"
			},
			{
				Text: "Danke für das Gespräch. Schönen Tag noch!",
				Color: NPCDialogAnswerColor.RED,
			}
		]
	};
}