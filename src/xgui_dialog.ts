export default class xGuiDialog{
	constructor(){
		$("div[xgui-action=close-dialog]").on("click", (event)=>{
			this.onCloseDialog(event);
		});
	}

	private onCloseDialog(event){
		$(event.currentTarget).closest("div[xgui-type=dialog]").hide();
	}
}