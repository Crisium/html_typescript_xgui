import xGuiResizeHorizontal from "./xgui_resize_horizontal.js";
import xGuiResizeVertical from "./xgui_resize_vertical.js";

export default class xGuiResizer{

	constructor(){


		$(`div[resizer=top], div[resizer=bottom]`).each((index:number, element:HTMLElement)=>{
			new xGuiResizeVertical({
				owner: $(element)}
			);
		});

		$(`div[resizer=left], div[resizer=right]`).each((index:number, element:HTMLElement)=>{
			new xGuiResizeHorizontal({
				owner: $(element)}
			);
		});

	}

}