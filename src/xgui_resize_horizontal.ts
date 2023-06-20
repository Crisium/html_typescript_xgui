export interface xGuiResizeHorizontalParams{
	owner: JQuery;
}

export default class xGuiResizeHorizontal{

	private _params: xGuiResizeHorizontalParams;
	private _resizer:JQuery;
	private _dragging: boolean = false;
	private _page_x_start: number = -1;
	private _owner_start_w: number = -1;
	private _which: string = "";

	constructor( params: xGuiResizeHorizontalParams ){

		this._params = params;

		this._which = params.owner.attr("resizer")
		if ( this._which=="left"){
			this._resizer = $(`<div class="vertical-resizer-left"></div>`);
		} else{
			this._resizer = $(`<div class="vertical-resizer-right"></div>`);
		}
		
		params.owner.append(this._resizer);

		let h:number = params.owner.height();
		this._resizer.css("height", h+"px");
	
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
			let h:number = params.owner.height();
			this._resizer.css("height", h+"px");
		});

/*
		params.owner.on("resize",(event)=>{
			console.log("got resize");
			let h:number = params.owner.height();
			this._resizer.css("height", h+"px");
		});
		*/
	}

	private onMouseDown(event){
		this._dragging = true;
		this._page_x_start = event.pageX;
		this._owner_start_w = this._params.owner.outerWidth();
	}

	private onMouseUp(event){
		this._dragging = false;
		this._page_x_start = -1;
	}

	private onMouseMove(event){
		// we are not dragging the resizer, we are resizing the owner!
		if ( this._which=="right"){
			this._params.owner.outerWidth(this._owner_start_w + (event.pageX - this._page_x_start));
		} else{
			this._params.owner.outerWidth(this._owner_start_w + (this._page_x_start - event.pageX));
		}

		document.dispatchEvent(new Event("xgui-resize-update"));
	}
}