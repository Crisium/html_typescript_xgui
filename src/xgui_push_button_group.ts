export interface IXGuiPushButtonGroupParams{
	selector?: JQuery;
}

export default class xGuiPushButtonGroup{

	private _target = undefined;

	constructor( params: IXGuiPushButtonGroupParams ){

		if (params.selector){
			this.create(params.selector);
		}

		/*
		let found = $(`div[xgui-type=push-button-group] div[xgui-type=toolbar-button]`);

		found.on("mousedown", (event)=>{
			event.preventDefault();
			this.onMouseDown(event);
		});

		$(document).on("mouseup", (event)=>{
			this.onMouseUp(event);
		});

		found.on("mouseup", (event)=>{
			this.onClick(event);
		});
		*/
	}

	create( selector: JQuery ){
		selector.on("mousedown", (event)=>{
			event.preventDefault();
			this.onMouseDown(event);
		});

		selector.on("mouseup", (event)=>{
			this.onClick(event);
		});		
	}

	private _cb_mousedown: any;

	private onMouseDown(event){
		this._target = $(event.currentTarget);
		this._target.attr("selected", "selected");

		$(document).on("mouseup", this._cb_mousedown = (event)=>{
			this.onMouseUp(event);
		});
	}

	private onMouseUp(event){

		$(document).off("mouseup", this._cb_mousedown);
		this._cb_mousedown = undefined;

		if (this._target==undefined){
			return;
		}

		this._target.removeAttr("selected");
		this._target = undefined;
	}

	private onClick(event){
		let target = $(event.currentTarget);
		target.removeAttr("selected");
	}
}