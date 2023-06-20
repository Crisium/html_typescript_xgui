export interface IXGuiToggleButtonGroupParams{
	selector?: JQuery;
}

export default class xGuiToggleButtonGroup{

	constructor( params: IXGuiToggleButtonGroupParams ){
		if (params.selector){
			this.create(params.selector);
		}
	}

	create( selector:JQuery ){
		selector.on("click", (event)=>{
			this.onClick(event);
		});
	}

	private onClick(event){

		let target = $(event.currentTarget);

		if (target.attr("selected")){
			target.removeAttr("selected");
		} else{
			target.attr("selected", "selected");
		}
	}
}