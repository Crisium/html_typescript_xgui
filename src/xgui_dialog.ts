export default class xGuiDialog{

	// singleton
	private static inst: xGuiDialog;
	static instance() : xGuiDialog{
		if (!xGuiDialog.inst){
			xGuiDialog.inst = new xGuiDialog;
		}
		return xGuiDialog.inst;
	}

	private constructor(){
		this.process();
	}

	process(){
		$("div[xgui-action=close-dialog]").on("click", (event)=>{
			this.onCloseDialog(event);
		});
	
	}

	private onCloseDialog(event){
		$(event.currentTarget).closest("div[xgui-type=dialog]").hide();
	}
}