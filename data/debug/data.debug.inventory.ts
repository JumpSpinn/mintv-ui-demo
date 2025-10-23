import { IItemTemplateDto } from "@/interfaces/Inventory/IItemTemplate.ts";
import { ItemType } from "@/enums/Inventory/ItemType.ts";
import { ITEMACTIONTYPE } from "@/enums/Inventory/ItemActionType.ts";
import { IEquipmentDto } from "@/interfaces/Inventory/IEquipmentDto.ts";
import { IContainerDto } from "@/interfaces/Inventory/IContainerDto.ts";
import { IInventoryDto } from "@/interfaces/Inventory/IInventoryDto.ts";
import { IItemDto } from "@/interfaces/Inventory/IItemDto.ts";
import { ContainerMod } from "@/enums/Inventory/ContainerMod";
import { ICombineRecipeDto } from "@/interfaces/Inventory/ICombineRecipeDto";

export class DebugData_Inventory {
	public static readonly ItemTemplates: IItemTemplateDto[] = [
		{
			Id: "headDebugTemplate",
			Name: "Kopf",
			Description: "Ein Kopf",
			Icon: "cloth/hat.PNG",
			Types: [ItemType.HEAD],
			Weight: 2_000,
			Dimension: { Height: 1, Width: 1 },
			Action: { ActionType: ITEMACTIONTYPE.STACKABLE, ActionQuantifier: 1 },
			Price: { Buy: 0, Sell: 0 }
		},
		{
			Id: "topDebugTemplate",
			Name: "Top",
			Description: "Ein Top",
			Icon: "cloth/streetwear.png",
			Types: [ItemType.TOP],
			Weight: 2_000,
			Dimension: { Height: 2, Width: 2 },
			Action: { ActionType: ITEMACTIONTYPE.DURABLE, ActionQuantifier: 100 },
			Price: { Buy: 0, Sell: 0 },
			Usable: {
				External: false
			}
		},
		{
			Id: "backpackDebugTemplate",
			Name: "Rucksack",
			Description: "Ein Rucksack",
			Icon: "cloth/sac.PNG",
			Types: [ItemType.BACKPACK],
			Weight: 2_000,
			Dimension: { Height: 3, Width: 2 },
			Action: { ActionType: ITEMACTIONTYPE.STACKABLE, ActionQuantifier: 1 },
			Price: { Buy: 0, Sell: 0 }
		},
		{
			Id: "legsDebugTemplate",
			Name: "Hose",
			Description: "Eine Hose",
			Icon: "cloth/jeans.png",
			Types: [ItemType.LEGS],
			Weight: 2_000,
			Dimension: { Height: 4, Width: 1 },
			Action: { ActionType: ITEMACTIONTYPE.STACKABLE, ActionQuantifier: 2 },
			Price: { Buy: 0, Sell: 0 }
		},
		{
			Id: "appleDebugTemplate",
			Name: "Apfel",
			Description: "Ein geiler Apfel zum fressen",
			Icon: "food/nuggets.png",
			Types: [],
			Weight: 2_000,
			Dimension: { Height: 1, Width: 1 },
			Action: { ActionType: ITEMACTIONTYPE.CONSUMPTION, ActionQuantifier: 5 },
			Price: { Buy: 0, Sell: 0 }
		},
		{
			Id: "wristDebugTemplate",
			Name: "Ein Arm Band",
			Description: "Ein Armband",
			Icon: "cloth/brasselet.png",
			Types: [
				ItemType.WRIST,
				ItemType.FOOD
			],
			Weight: 2_000,
			Dimension: { Height: 1, Width: 2 },
			Action: { ActionType: ITEMACTIONTYPE.STACKABLE, ActionQuantifier: 1 },
			Price: { Buy: 0, Sell: 0 },
			Usable: {
				External: true
			}
		},
		{
			Id: "waterDebugTemplate",
			Name: "Wasser",
			Description: "Erfrischend anders",
			Icon: "drink/water_bottle.png",
			Types: [
				ItemType.DRINK
			],
			Weight: 500,
			Dimension: { Height: 2, Width: 1 },
			Action: { ActionType: ITEMACTIONTYPE.STACKABLE, ActionQuantifier: 5 },
			Price: { Buy: 0, Sell: 0 },
			Usable: {
				External: false
			},
			Renameable: true
		},
		{
			Id: "unusableTemplate",
			Name: "Schutzweste",
			Description: "Einfach Anders",
			Icon: "cloth/kevlar.png",
			Types: [
				ItemType.AMMO
			],
			Weight: 500,
			Dimension: { Height: 2, Width: 2 },
			Action: { ActionType: ITEMACTIONTYPE.DURABLE, ActionQuantifier: 101 },
			Price: { Buy: 0, Sell: 0 }
		},
		{
			Id: "weaponTemplate1",
			Name: "Pistole",
			Description: "",
			Icon: "weapons/Handgun/Pistol.png",
			Types: [ItemType.WEAPON_SHORT],
			Weight: 500,
			Dimension: { Height: 1, Width: 1 },
			Action: { ActionType: ITEMACTIONTYPE.STACKABLE, ActionQuantifier: 1 },
			Price: { Buy: 0, Sell: 0 }
		},
		{
			Id: "weaponTemplate2",
			Name: "AK-47",
			Description: "",
			Icon: "weapons/AssaultRifles/AssaultRifle.png",
			Types: [ItemType.WEAPON_LONG],
			Weight: 500,
			Dimension: { Height: 1, Width: 2 },
			Action: { ActionType: ITEMACTIONTYPE.STACKABLE, ActionQuantifier: 1 },
			Price: { Buy: 0, Sell: 0 }
		},
		{
			Id: "magazineTemplate1",
			Name: "9MM",
			Description: "",
			Icon: "weapons/Ammo/ammo_9.png",
			Types: [ItemType.WEAPON_LONG],
			Weight: 1000,
			Dimension: { Height: 1, Width: 1 },
			Action: { ActionType: ITEMACTIONTYPE.STACKABLE, ActionQuantifier: 1 },
			Price: { Buy: 0, Sell: 0 }
		},
		{
			Id: "magazineTemplate2",
			Name: "7.62",
			Description: "",
			Icon: "weapons/Ammo/ammo-rifle3.png",
			Types: [ItemType.WEAPON_LONG],
			Weight: 1000,
			Dimension: { Height: 1, Width: 1 },
			Action: { ActionType: ITEMACTIONTYPE.STACKABLE, ActionQuantifier: 1 },
			Price: { Buy: 0, Sell: 0 }
		}
	];
	public static readonly EquipmentData: IEquipmentDto = {
		Slots: [
			{
				Slot: ItemType.HEAD,
				Item: {
					Id: 1,
					TemplateId: "headDebugTemplate",
					ActionQuantifier: 1
				}
			},
			{
				Slot: ItemType.LEGS,
				Item: {
					Id: 2,
					TemplateId: "legsDebugTemplate",
					ActionQuantifier: 2,
					Container: {
						Id: 1337,
						Items: [
							{
								Item: {
									ActionQuantifier: 1,
									Id: 1001,
									TemplateId: "waterDebugTemplate"
								},
								Slot: 15
							},
							{
								Item: {
									ActionQuantifier: 1,
									Id: 1002,
									TemplateId: "waterDebugTemplate"
								},
								Slot: 1
							},
							{
								Item: {
									ActionQuantifier: 7,
									Id: 1003,
									TemplateId: "waterDebugTemplate"
								},
								Slot: 5
							}
						],
						Name: "Infinity Hose (Reine Ablage)",
						Template: {
							Modifications: []
						}
					}
				}
			},
			{
				Slot: ItemType.TOP,
				Item: {
					Id: 3,
					TemplateId: "topDebugTemplate",
					ActionQuantifier: 75,
					Container: {
						Id: 7,
						Name: "Debug Pullover",
						Template: {
							Width: 7,
							WeightLimit: 3_000
						},
						Items: [
							{
								Slot: 0,
								Item: {
									Id: 678,
									TemplateId: "weaponTemplate1",
									ActionQuantifier: 1,
									Meta: {
										Weapon: {
											Ammo: 123
										}
									}
								}
							}
						]
					}
				}
			},
			{
				Slot: ItemType.BACKPACK,
				Item: {
					Id: 4,
					TemplateId: "backpackDebugTemplate",
					ActionQuantifier: 1,
					Container: {
						Id: 6,
						Name: "Debug Rucksack",
						Template: {
							Height: 4,
							Width: 8,
							WeightLimit: 10_000
						},
						Items: [
							{
								Slot: 0,
								IsRotated: false,
								Item: {
									Id: 61,
									TemplateId: "wristDebugTemplate",
									ActionQuantifier: 1
								}
							},
							{
								Slot: 10,
								IsRotated: false,
								Item: {
									Id: 62,
									TemplateId: "waterDebugTemplate",
									ActionQuantifier: 2
								}
							},
							{
								Slot: 12,
								IsRotated: true,
								Item: {
									Id: 63,
									TemplateId: "waterDebugTemplate",
									ActionQuantifier: 1254
								}
							}
						]
					}
				}
			}
		]
	};
	public static readonly PocketData: IContainerDto = {
		Id: 1,
		Name: "Hosentasche",
		Template: {
			Height: 2,
			Width: 5,
			Modifications: []
		},
		Items: [
			{
				Slot: 0,
				IsRotated: false,
				Item: {
					Id: 23,
					TemplateId: "waterDebugTemplate",
					ActionQuantifier: 1
				}
			},
			{
				Slot: 1,
				IsRotated: false,
				Item: {
					Id: 50,
					TemplateId: "topDebugTemplate",
					ActionQuantifier: 40,
					Container: {
						Id: 50,
						Items: [],
						Name: "Ein Name",
						Template: {
							Height: 5,
							Width: 10
						}
					}
				}
			},
			{
				Slot: 3,
				IsRotated: false,
				Item: {
					Id: 50,
					TemplateId: "unusableTemplate",
					ActionQuantifier: 101
				}
			}
		]
	};
	public static readonly DocumentsData: IContainerDto = {
		Id: 8080,
		Name: "Dokumente",
		Template: {
			Modifications: [],
			AllowedTypes: [
				ItemType.DOCUMENT,
				ItemType.NON_REMOVEABLE
			]
		},
		Items: []
	};
	public static readonly KeysData: IContainerDto = {
		Id: 8081,
		Name: "Schweizer Schlüssel",
		Template: {
			Modifications: [],
			AllowedTypes: [
				ItemType.KEY,
				ItemType.NON_REMOVEABLE
			]
		},
		Items: []
	};
	public static readonly ExternContainerData: IContainerDto[] = [
		{
			Id: 3,
			Name: "KeyBäckchen",
			Template: {
				Height: 3,
				Width: 8,
				WeightLimit: 5_000
			},
			Items: [
				{
					Slot: 0,
					IsRotated: false,
					Item: {
						Id: 780,
						TemplateId: "appleDebugTemplate",
						ActionQuantifier: 2
					}
				},
				{
					Slot: 1,
					IsRotated: false,
					Item: {
						Id: 548,
						TemplateId: "weaponTemplate2",
						ActionQuantifier: 1
					}
				},
				{
					Slot: 3,
					IsRotated: true,
					Item: {
						Id: 549,
						TemplateId: "weaponTemplate2",
						ActionQuantifier: 1
					}
				},
				{
					Slot: 8,
					IsRotated: false,
					Item: {
						Id: 378,
						TemplateId: "magazineTemplate1",
						ActionQuantifier: 23
					}
				},
				{
					Slot: 9,
					IsRotated: false,
					Item: {
						Id: 989,
						TemplateId: "magazineTemplate2",
						ActionQuantifier: 1124
					}
				}
			]
		},
		{
			Id: 4,
			Name: "Kofferraum",
			Template: {
				Height: 3,
				Width: 8,
				WeightLimit: 30_000
			},
			Items: [
				{
					Slot: 0,
					IsRotated: true,
					Item: {
						Id: 156,
						TemplateId: "waterDebugTemplate",
						ActionQuantifier: 2
					}
				},
				{
					Slot: 2,
					IsRotated: true,
					Item: {
						Id: 157,
						TemplateId: "waterDebugTemplate",
						ActionQuantifier: 8
					}
				},
				{
					Slot: 4,
					IsRotated: false,
					Item: {
						Id: 158,
						TemplateId: "waterDebugTemplate",
						ActionQuantifier: 1
					}
				}
			]
		}
	];
	public static readonly EnvironmentItemsData: IItemDto[] = [
		{
			Id: 678,
			TemplateId: "weaponTemplate1",
			ActionQuantifier: 1
		},
		{
			Id: 548,
			TemplateId: "waterDebugTemplate",
			ActionQuantifier: 5
		},
		{
			Id: 549,
			TemplateId: "weaponTemplate2",
			ActionQuantifier: 1
		},
		{
			Id: 378,
			TemplateId: "magazineTemplate1",
			ActionQuantifier: 23
		},
		{
			Id: 989,
			TemplateId: "magazineTemplate2",
			ActionQuantifier: 1124
		},
		{
			Id: 99989,
			TemplateId: "backpackDebugTemplate",
			ActionQuantifier: 1124,
			Container: {
				Id: 3,
				Name: "KeyBäckchen",
				Template: {
					Height: 7,
					Width: 8,
					WeightLimit: 5_000
				},
				Items: [
					{
						Slot: 28,
						IsRotated: true,
						Item: {
							Id: 156,
							TemplateId: "waterDebugTemplate",
							ActionQuantifier: 2
						}
					},
					{
						Slot: 20,
						IsRotated: true,
						Item: {
							Id: 157,
							TemplateId: "waterDebugTemplate",
							ActionQuantifier: 8
						}
					},
					{
						Slot: 14,
						IsRotated: false,
						Item: {
							Id: 158,
							TemplateId: "waterDebugTemplate",
							ActionQuantifier: 1
						}
					}
				]
			}
		}
	];
	public static readonly CombineOutputData: IContainerDto = {
		Id: 1337,
		Items: [],
		Name: "Erzeugnis",
		Template: {
			Modifications: [ContainerMod.NO_PUT],
			Height: 1
		}
	};
	public static readonly CombineRecipesKnowledge: ICombineRecipeDto[] = [
		{
			Id: "1",
			Output: {
				Amount: 1,
				ItemTemplateId: "headDebugTemplate",
			},
			Name: "Wasser-Hut Konvertierung",
			Ingredients: [
				{
					Amount: 1,
					ItemTemplateId: "legsDebugTemplate"
				},
				{
					Amount: 2,
					ItemTemplateId: "waterDebugTemplate"
				}
			]
		},
		{
			Id: "2",
			Output: {
				Amount: 1,
				ItemTemplateId: "waterDebugTemplate",
			},
			Name: "Wasser Multiplikator",
			Ingredients: [
				{
					Amount: 2,
					ItemTemplateId: "waterDebugTemplate"
				}
			]
		}
	];
	public static readonly InventoryData: IInventoryDto = {
		CharacterId: 1,
		Equipment: this.EquipmentData,
		Pockets: this.PocketData,
		Documents: this.DocumentsData,
		Keys: this.KeysData,
		CombineOutput: this.CombineOutputData
	};
}