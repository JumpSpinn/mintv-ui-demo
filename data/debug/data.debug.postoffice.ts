import { IPostOfficeDto } from "@/interfaces/PostOffice/IPostOfficeDto.ts";

export class DebugData_PostOffice {
	public static readonly DefaultData: IPostOfficeDto[] = [
		{
			Id: 1,
			Sender: "Debug 1",
			Title: "Debug Titel 1",
			Message: "Debug Nachricht 1",
			Claimed: false,
			MarkedForDeletion: false,
			SentAt: 1709373815685,
			Package: {
				ItemTemplateId: "backpackDebugTemplate",
				Amount: 1
			}
		},
		{
			Id: 2,
			Sender: "Debug 2",
			Title: "Debug Titel 2",
			Message: "Debug Nachricht 2",
			Claimed: true,
			MarkedForDeletion: false,
			SentAt: 1709373815685,
			Package: {
				ItemTemplateId: "legsDebugTemplate",
				Amount: 2
			}
		},
		{
			Id: 3,
			Sender: "Debug 3",
			Title: "Debug Titel 3",
			Message: "Debug Nachricht 3",
			Claimed: false,
			MarkedForDeletion: true,
			SentAt: 1709373815685,
			Package: {
				ItemTemplateId: "appleDebugTemplate",
				Amount: 3
			}
		},
		{
			Id: 4,
			Sender: "Debug 4",
			Title: "Debug Titel 4",
			Message: "Debug Nachricht 4",
			Claimed: true,
			MarkedForDeletion: true,
			SentAt: 1709373815685,
			Package: {
				ItemTemplateId: "waterDebugTemplate",
				Amount: 4
			}
		}
	];
}