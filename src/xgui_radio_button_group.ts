export default class xGuiRadioButtonGroup{

	constructor(){
		$(`div[xgui-type=radio-button-group] div[xgui-type=toolbar-button]`).on("click", (event)=>{
			this.onClick(event);
		});
	}

	private onClick(event){

		let target = $(event.currentTarget);

		let radio_button_group = target.closest(`div[xgui-type=radio-button-group]`);
		radio_button_group.find(`div[xgui-type=toolbar-button]`).removeAttr("selected");

		target.attr("selected", "selected");

	}
}