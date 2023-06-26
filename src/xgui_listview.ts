import xUtilGuid from "./xutil_guid.js";
import { xGuiItem } from "./xgui_item.js";

export interface IXGuiListViewParams{
	target: JQuery;
	on_select?: ()=>void;
}

export interface IXGuiListViewType{
	target: string;
}

export default class xGuiListView{

	private _target: JQuery;
	private _on_select: ()=>void;

	private _map: Map<string, xGuiItem> = new Map<string, xGuiItem>();


	// singleton
	private static inst: xGuiListView;
	static instance() : xGuiListView{
		if (!xGuiListView.inst){
			xGuiListView.inst = new xGuiListView;
		}
		return xGuiListView.inst;
	}

	private constructor(){
		this.process();
	}

	/*
	constructor( params: IXGuiListViewParams ){
		this._target = params.target;
		this._on_select = params.on_select;
		this._target.empty();
	}
	*/

	process(){
	
	}

	addItem(item:xGuiItem){

		let uid:string = xUtilGuid.get();
		this._map.set(uid, item);

		let html_div = $(`<div id="${uid}">${item._title}</div>`);
		this._target.append(html_div);

		html_div.on("click", (event)=>{
			console.log("item clicked");
			$(event.target).parent().children().removeAttr("selected");
			$(event.target).attr("selected", "selected");
			if ( this._on_select ){
				this._on_select();
			}
		});
	}

	selected(): xGuiItem{
		
		let found = this._target.find("div[selected=selected]").first();
		if (found.length==0){
			return undefined;
		}

		let uid:string = found.attr("id");
		return this._map.get(uid);
	}

	static viewList( params:IXGuiListViewType ){
		$(params.target).removeClass("view-grid");
		$(params.target).removeClass("view-grid-large");
		$(params.target).addClass("view-list");
	}

	static viewGrid( params:IXGuiListViewType ){
		$(params.target).removeClass("view-list");
		$(params.target).removeClass("view-grid-large");
		$(params.target).addClass("view-grid");
	}

	static viewGridLarge( params:IXGuiListViewType ){
		$(params.target).removeClass("view-list");
		$(params.target).removeClass("view-grid");
		$(params.target).addClass("view-grid-large");
	}

}