

import xGui from "./xgui.js";
import xGuiDialog from "./xgui_dialog.js";
import xGuiTabs from "./xgui_tabs.js";
import xGuiResizer from "./xgui_resizer.js";
import xGuiToolbar from "./xgui_toolbar.js";
import xGuiRadioButtonGroup from "./xgui_radio_button_group.js";
import xGuiToggleButtonGroup from "./xgui_toggle_button_group.js";
import xGuiPushButtonGroup from "./xgui_push_button_group.js";
import xGuiTree from "./xgui_tree.js";
import xGuiListView from "./xgui_listview.js";


document.addEventListener("DOMContentLoaded", (event) => { 

	// globablly just make all inputs select there content when clicked on
	$(document).on("click", `input`, (event)=>{
		(<any>event.currentTarget).select();
	});

	xGuiDialog.instance();
	xGuiTabs.instance();
	xGuiTree.instance();
	xGuiResizer.instance();
	xGuiRadioButtonGroup.instance();
	xGuiToggleButtonGroup.instance();
	xGuiPushButtonGroup.instance();
	xGuiListView.instance();
	xGuiToolbar.instance();

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