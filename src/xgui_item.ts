export interface IXGuiItemParams{
	icon?: string;
	title?: string;
	desc?: string;
	data?: any;
}

export class xGuiItem{

	public _icon: string;
	public _title: string;
	public _desc: string;
	public _data: any;

	constructor( params:IXGuiItemParams = {}){
		this._icon = params.icon;
		this._title = params.title;
		this._desc = params.desc;
		this._data = params.data;		
	}
}