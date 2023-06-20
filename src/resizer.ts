import * as jQUery from 'jquery';
var $ = jQuery;

export default class Resizer{

	private _size: number = 10;
	private _dragging: boolean = false;

	private _page_x_start: number = -1;
	private _page_y_start: number = -1;
	private _width_start: number = -1;
	private _height_start: number = -1;

	private _highlighted: boolean = false;
	private _target_over;

	private _target;

	constructor(){
	
		$(document).on("mousemove", (event) => {
			this.onMouseMove(event);
		});

		$("div[resizer=left], div[resizer=right], div[resizer=top], div[resizer=bottom]").on("mousedown", (event) => {
			this.onMouseDown(event);
		});

		$(document).on("mouseup", (event) => {
			this.onMouseUp(event);
		});

		$("div[resizer=left], div[resizer=right], div[resizer=top], div[resizer=bottom]").on("mouseover", (event) => {
			this.onMouseOver(event);
		});

		$("div[resizer=left], div[resizer=right], div[resizer=top], div[resizer=bottom]").on("mouseout", (event) => {
			this.onMouseOut(event);
		});
	}

	private touchingResizer(event, target) : boolean{

		let edge:string = target.attr("resizer");
		if (!edge){
			return false;
		}

		if (edge=="right" && event.offsetX > target.outerWidth() - this._size ){
			return true;
		}

		if (edge=="left" && event.offsetX<this._size){
			return true;
		}

		if (edge=="top" && event.offsetY<this._size){
			return true;
		}

		if (edge=="bottom" && event.offsetY > target.outerHeight() - this._size){
			return true;
		}

		return false;
	}

	private highlightResizer(target, show:boolean){
		if (!target){
			return;
		}

		let size:number = show ? this._size: 0;
		let edge:string = target.attr("resizer");
		if (edge){
			target.css(`border-${edge}`, `solid ${size}px red`);
		}
	}

	private onMouseDown(event){

		let target = $(event.currentTarget);

		if (this.touchingResizer(event, target)){
			this._target = target;
			this._dragging = true;
			this._page_x_start = event.pageX;
			this._page_y_start = event.pageY;
			this._width_start = target.outerWidth();
			this._height_start = target.outerHeight();
		}
	}

	private onMouseUp(event){
		this._dragging = false;
		this._target = undefined;
	}

	private onMouseMove(event) {

		if (!this._target){

			// update target over
			if (this._target_over){
				this.highlightResizer(
					this._target_over, this.touchingResizer(event, this._target_over)
				);
			}

			return;
		}

		let edge:string = this._target.attr("resizer");
		if (!edge){
			return;
		}

		if (edge=="left"){
			let new_width:number = this._width_start - (event.pageX-this._page_x_start);
			this._target.outerWidth(new_width);
		}

		if (edge=="right"){
			let new_width:number = this._width_start - (this._page_x_start-event.pageX);
			this._target.outerWidth(new_width);
		}

		if (edge=="top"){
			let new_height:number = this._height_start - (event.pageY-this._page_y_start);
			this._target.outerHeight(new_height);
		}

		if (edge=="bottom"){
			let new_height:number = this._height_start - (this._page_y_start-event.pageY);
			this._target.outerHeight(new_height);
		}
	}

	private onMouseOver(event){

		if (this._target){
			return;
		}

		let target = $(event.currentTarget);

		if (this.touchingResizer(event, target)){
			this.highlightResizer(target, true);
			this._highlighted = true;
			this._target_over = target;
		} 
	}

	private onMouseOut(event){
		if (this._target){
			return;
		}

		let target = $(event.currentTarget);
		this.highlightResizer(target, false);
		this._highlighted = false;
		this._target_over = undefined;
	}

}