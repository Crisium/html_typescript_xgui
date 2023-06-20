

import xGui from "./xgui.js";
import xGuiDialog from "./xgui_dialog.js";
import xGuiTabs from "./xgui_tabs.js";
import xGuiResizer from "./xgui_resizer.js";
import xGuiToolbar from "./xgui_toolbar.js";
import xGuiRadioButtonGroup from "./xgui_radio_button_group.js";
import xGuiToggleButtonGroup from "./xgui_toggle_button_group.js";
import xGuiPushButtonGroup from "./xgui_push_button_group.js";
import xGuiTree from "./xgui_tree.js";


document.addEventListener("DOMContentLoaded", (event) => { 

	// globablly just make all inputs select there content when clicked on
	$(document).on("click", `input`, (event)=>{
		(<any>event.currentTarget).select();
	});

	new xGui;
	new xGuiDialog;
	new xGuiTabs;
	//new xGuiTree({ selector: $(`div[xgui-type=tree]`)});
	xGuiTree.instance().process({ selector: $(`div[xgui-type=tree]`)});
	new xGuiResizer;
	new xGuiToolbar;
	new xGuiRadioButtonGroup;
	new xGuiToggleButtonGroup({ selector: $(`div[xgui-type=toggle-button-group] div[xgui-type=toolbar-button]`) });
	new xGuiPushButtonGroup({ selector: $(`div[xgui-type=push-button-group] div[xgui-type=toolbar-button]`) });
	//new xGuiListView;


	xGuiTree.instance().addChild({
		id: "id_1",
		parent_id: "hierarchy-tree",
		content: "testme1"
	});

	xGuiTree.instance().addChild({
		parent_id: "id_1",
		content: "testme2"
	});

});