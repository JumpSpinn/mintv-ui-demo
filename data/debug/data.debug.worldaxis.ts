import { PosRot } from "@/interfaces/IPosRot.ts";
import { WorldAxisControlType } from "@/enums/WorldAxis/ControlType.ts";

export class DebugData_WorldAxis {
	public static readonly DefaultData: { obj : PosRot, cam: PosRot, controlType: WorldAxisControlType } = {
		cam: {
			Position: {
				X: 0,
				Y: 0,
				Z: 10
			},
			Rotation: {
				X: 0,
				Y: 0,
				Z: 0
			}
		},
		controlType: WorldAxisControlType.TRANSLATE,
		obj: {
			Position: {
				X: 0,
				Y: 0,
				Z: 0
			},
			Rotation: {
				X: 0,
				Y: 0,
				Z: 0
			}
		}
	};
}