import xGuid from "./xutil_guid.js";
import xGuiMenuItem from "./xgui_menuitem.js";

export enum eMenuDir{
	left,
	right,
	top,
	bottom
}

export interface IxGuiMenuParams{
	uid?: string;
	owner?: JQuery;
	open_dir?: eMenuDir;
	icon?: string;
}

export default class xGuiMenu{

	private _uid: string = xGuid.get();
	private _jmenu: JQuery;
	private _open_dir: eMenuDir;

	constructor( params: IxGuiMenuParams={} ){

		this._jmenu = $(`<ul id="${this._uid}" class="nav navtest"></ul>`);
		params.owner.append(this._jmenu);

	}

	add( item: xGuiMenuItem ) : xGuiMenuItem {
		this._jmenu.append(item.jelement());
		return item;
	}

}