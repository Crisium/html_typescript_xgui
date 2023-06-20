import xGuiMenuItem from "./xgui_menuitem.js";

export interface IxGuiMenuItemGroupParams{
	content?: string;
}

export default class xGuiMenuItemGroup{

	private _jmenu_group: JQuery;

	constructor( params: IxGuiMenuItemGroupParams = {}){
	
		let content:string = "";
		if (params.content!=undefined){
			content = params.content;
		}
		this._jmenu_group = $(`<ul>${content}</ul>`);
	}

	add( item: xGuiMenuItem ) : xGuiMenuItem {
		this._jmenu_group.append( item.jelement() );
		return item;
	}

	jelement() : JQuery{
		return this._jmenu_group;
	}
}
