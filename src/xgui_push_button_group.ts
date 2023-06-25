export interface IGuiPushButtonGroupParams{
	selector: JQuery;
}

export default class xGuiPushButtonGroup{

	// singleton
	private static inst: xGuiPushButtonGroup;
	static instance() : xGuiPushButtonGroup{
		if (!xGuiPushButtonGroup.inst){
			xGuiPushButtonGroup.inst = new xGuiPushButtonGroup;
		}
		return xGuiPushButtonGroup.inst;
	}

	private constructor(){
		this.process({ selector: $(`div[xgui-type=push-button-group]`)});
	}

	process( params: IGuiPushButtonGroupParams ){
	}
}