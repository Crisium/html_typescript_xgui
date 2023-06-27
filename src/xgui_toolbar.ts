export default class xGuiToolbar{

	// singleton
	private static inst: xGuiToolbar;
	static instance() : xGuiToolbar{
		if (!xGuiToolbar.inst){
			xGuiToolbar.inst = new xGuiToolbar;
		}
		return xGuiToolbar.inst;
	}

	private constructor(){
		this.process();
	}
	
	process(){
	
	}
}