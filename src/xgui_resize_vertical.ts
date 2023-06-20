export interface xGuiResizeVerticalParams{
	owner: JQuery;
}

export default class xGuiResizeVertical{

	private _params: xGuiResizeVerticalParams;
	private _resizer:JQuery;
	private _dragging: boolean = false;
	private _page_y_start: number = -1;
	private _owner_start_h: number = -1;
	private _which: string = "";

	constructor( params: xGuiResizeVerticalParams ){

		this._params = params;

		this._which = params.owner.attr("resizer")
		if ( this._which=="bottom"){
			this._resizer = $(`<div class="vertical-resizer-bottom"></div>`);
		} else{
			this._resizer = $(`<div class="vertical-resizer-top"></div>`);
		}
		
		params.owner.append(this._resizer);

		let w:number = params.owner.width();
		this._resizer.css("width", w+"px");
	
		this._resizer.on("mousedown", (event) => {
			this.onMouseDown(event);
		});

		$(document).on("mouseup", (event) => {
			this.onMouseUp(event);
		});

		$(document).on("mousemove", (event) => {
			if (this._dragging){
				this.onMouseMove(event);
			}
		});

		document.addEventListener("xgui-resize-update", ()=>{
			let w:number = params.owner.width();
			this._resizer.css("width", w+"px");
		});
	}

	private onMouseDown(event){
		this._dragging = true;
		this._page_y_start = event.pageY;
		this._owner_start_h = this._params.owner.outerHeight();
	}

	private onMouseUp(event){
		this._dragging = false;
		this._page_y_start = -1;
	}

	private onMouseMove(event){
		// we are not dragging the resizer, we are resizing the owner!
		if ( this._which=="bottom"){
			this._params.owner.outerHeight(this._owner_start_h + (event.pageY - this._page_y_start));
		} else{
			this._params.owner.outerHeight(this._owner_start_h + (this._page_y_start - event.pageY));
		}

		document.dispatchEvent(new Event("xgui-resize-update"));
	}
}