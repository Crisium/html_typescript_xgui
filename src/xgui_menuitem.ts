import xGuiMenu from "./xgui_menu";
import xGuiMenuItemGroup from "./xgui_menuitemgroup";

export interface IxGuiMenuItem{
	id?: string;
	content?: string;
}

export default class xGuiMenuItem{

	private _content: string;
	private _id: string;
	private _jmenu_item: JQuery;

	constructor( params: IxGuiMenuItem ){
		this._content = params.content;
		this._id = params.id;

		if (this._content==undefined){
			this._content = "";
		}

		let id_inject:string = "";
		if (this._id!=undefined){
			id_inject = `id="${this._id}"`;
		}

		this._jmenu_item = $(`<li ${id_inject}><a href="#">${this._content}</a></li>`);
	}

	jelement() : JQuery{
		return this._jmenu_item;
	}

	id() : string{
		return this._id;
	}

	content() : string{
		return this._content;
	}

	addMenuGroup( menu_group: xGuiMenuItemGroup ) : xGuiMenuItemGroup{
		this._jmenu_item.append(menu_group.jelement());
		return menu_group;
	}
}