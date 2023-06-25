export interface IGuiToggleButtonGroupParams{
	selector?: JQuery;
}

export default class xGuiToggleButtonGroup{

	// singleton
	private static inst: xGuiToggleButtonGroup;
	static instance() : xGuiToggleButtonGroup{
		if (!xGuiToggleButtonGroup.inst){
			xGuiToggleButtonGroup.inst = new xGuiToggleButtonGroup;
		}
		return xGuiToggleButtonGroup.inst;
	}

	private constructor(){
		this.process({ selector: $(`div[xgui-type=toggle-button-group]`)});
	}
	
	private onClick(event){
		let target = $(event.currentTarget);
		if (target.attr("selected")){
			target.removeAttr("selected");
		} else{
			target.attr("selected", "selected");
		}
	}

	process( params: IGuiToggleButtonGroupParams ){

		params.selector.find(`button[xgui-type=button]`).on("click", (event)=>{
			this.onClick(event);
		});

	}
}