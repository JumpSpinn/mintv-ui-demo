import { IPlayerSettings } from "@/interfaces/PauseMenu/IPlayerSettings.ts";
import { InterfacePosition } from "@/enums/PauseMenu/InterfacePosition.ts";
import { HotBarVisibility } from "@/enums/HotBar/HotBarVisibility.ts";

export class DebugData_PlayerSettings {
	public static readonly DefaultSettings: IPlayerSettings = {
		Audio: {
			Interface: {
				PlayConfirmSound: true,
				ConfirmSoundVolume: 30
			},
			Voice: {
				SaveLastRange: true,
				WrapAround: true
			}
		},
		Interface: {
			General: {
				CenterMouse: false,
				HideKeyHelper: false
			},
			Notification: {
				Position: InterfacePosition.TOP_RIGHT
			},
			Hud: {
				HideNonCritical: false,
				ShowAchievements: true,
				Position: InterfacePosition.MIDDLE_RIGHT,
				VitalColor: "#74b987",
				HealthColor: "#d46d68",
				ArmorColor: "#68a4d4",
				LungColor: "#d48e68",
				RadioColor: "#68a4d4",
				MegaphoneColor: "#d48e68",
				MicrophoneColor: "#74b987"
			},
			Progress: {
				Position: InterfacePosition.TOP_LEFT
			},
			Speedometer: {
				ShowBackground: false,
				Position: InterfacePosition.BOTTOM_RIGHT,
				Color: "#ffffff"
			},
			Modal: {
				Position: InterfacePosition.TOP_LEFT
			},
			HotBar: {
				Visibility: HotBarVisibility.HALF,
				ShowEmpty: false
			}
		},
		Gameplay: {
			Camera: {
				BlockAfkCam: false,
				SkipLoginCam: false
			},
			Interaction: {
				ShowPositionMarker: false,
				NeverShowMarker: false
			},
			Inventory: {
				CloseOnDrop: true,
				OpenContainerOnHover: true,
				BlurScreen: true
			}
		},
		KeyboardLayout: {
			"Debug": {
				"Debug 1": 69,
				"Debug 2": 18
			}
		},
		Blips: {
			ActiveCategories: [1, 2, 4]
		}
	};
}