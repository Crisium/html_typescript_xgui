import xGuiResizeHorizontal from "./xgui_resize_horizontal.js";
import xGuiResizeVertical from "./xgui_resize_vertical.js";

export interface IGuiResizerParams{
	selector: JQuery;
}

export default class xGuiResizer{

	// singleton
	private static inst: xGuiResizer;
	static instance() : xGuiResizer{
		if (!xGuiResizer.inst){
			xGuiResizer.inst = new xGuiResizer;
		}
		return xGuiResizer.inst;
	}

	private constructor(){
		this.process({ selector: $(`div[resizer]`)});
	}

	process( params: IGuiResizerParams ){
	
		params.selector.each( (index, el)=>{
			let j:JQuery = $(el);
			let resizer_direction = j.attr("resizer");

			switch (resizer_direction){
				case "right":
				case "left":
					new xGuiResizeHorizontal({
						owner: j
					});
					break;

				case "top":
				case "bottom":
					new xGuiResizeVertical({
						owner: j
					});
					break;
			}
		});
	}

	/*
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
	*/

}