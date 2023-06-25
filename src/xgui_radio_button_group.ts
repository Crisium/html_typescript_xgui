
export interface IGuiRadioButtonGroupParams{
	selector: JQuery;
}

export default class xGuiRadioButtonGroup{

	// singleton
	private static inst: xGuiRadioButtonGroup;
	static instance() : xGuiRadioButtonGroup{
		if (!xGuiRadioButtonGroup.inst){
			xGuiRadioButtonGroup.inst = new xGuiRadioButtonGroup;
		}
		return xGuiRadioButtonGroup.inst;
	}

	private constructor(){
		this.process({ selector: $(`div[xgui-type=radio-button-group]`)});
	}

	private onClick(event){
		let target = $(event.currentTarget);
		let radio_button_group = target.closest(`div[xgui-type=radio-button-group]`);
		radio_button_group.find(`button[xgui-type=button]`).removeAttr("selected");
		target.attr("selected", "selected");
	}

	process( params: IGuiRadioButtonGroupParams ){

		params.selector.find(`button[xgui-type=button]`).on("click", (event)=>{
			this.onClick(event);
		});

	}
}