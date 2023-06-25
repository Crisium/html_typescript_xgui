import xUtilGuid from "./xutil_guid.js";

export interface IGuiTreeParams{
	selector: 		JQuery;
}

export interface IGuiTreeAddChild{
	id?:		string;
	parent_id?:	string;
	content?:	string;
}

export default class xGuiTree{

	// singleton
	private static inst: xGuiTree;
	static instance() : xGuiTree{
		if (!xGuiTree.inst){
			xGuiTree.inst = new xGuiTree;
		}
		return xGuiTree.inst;
	}

	private constructor(){
		this.process({ selector: $(`div[xgui-type=tree]`)});
	}

	addChild( params: IGuiTreeAddChild ){
		
		let id: string = params.id ? `id="${params.id}"` : "";
		let content: string = params.content;

		let html: string = `
			<div ${id} xgui-type="tree-node">
				<span class="expander-symbol"></span>
				<div class="node-content">
					<div xgui-type="tree-value">${content}</div>
				</div>
			</div>
		`;
		let new_node = $(html);

		let node_parent: JQuery = $(`#`+params.parent_id).first();

		let node_content: JQuery;
		if ( node_parent.attr("xgui-type")=="tree-node" ){
			node_content = node_parent.find(`.node-content`).first();
		} else {
			node_content = node_parent;
		}

		node_content.append(new_node);

		this.processTree(node_parent)
	}

	private onMouseDownValue(event){
		let target = $(event.currentTarget);

		// return if already selected
		if (target.hasClass("tree-value-selected")){
			return;
		}

		target.closest("div[xgui-type=tree]").find("div[xgui-type=tree-value]").removeClass("tree-value-selected");
		target.toggleClass("tree-value-selected");

		let node:JQuery = target.closest("div[xgui-type=tree-node]");
		let id:string = node.attr("id");
	}

	private createExpander( jtreenode: JQuery ){

		let expander = jtreenode.find(".expander-symbol").first();

		// we leave if we already have an expander
		if ( expander.hasClass("expander-symbol-down") || expander.hasClass("expander-symbol-right")){
			return;
		}

		expander.empty();
		expander.append("&#9660;");	// down arrow
		expander.addClass("expander-symbol-down");

		expander.on("click", (event)=>{
			let target = $(event.currentTarget);
			target.toggleClass("expander-symbol-down");
			target.toggleClass("expander-symbol-right");
			target.text( target.text()==String.fromCharCode(9660)?String.fromCharCode(9654):String.fromCharCode(9660) );
			target.siblings(".node-content").children(`div[xgui-type=tree-node]`).toggle();
		});
	}

	process( params : IGuiTreeParams ){
		// for each tree in selector we build
		params.selector.each(( index:number, element: HTMLElement)=>{
			this.processTree( $(element) );
		});
	}

	private processTree( tree_node: JQuery ){

		let expander = tree_node.find(".expander-symbol");

		// add correct expander symbols here
		expander.each( (index, el)=>{

			// do we a child node
			let node_content = $(el).siblings(`.node-content`).first();
			let child_tree_node = node_content.find(`div[xgui-type=tree-node]`).first();

			if (child_tree_node.length==0){
				return;
			}

			// ▶▼
			//$(el).text(`▶`);
			$(el).text(String.fromCharCode(9660));	// triangle pointing down
			$(el).addClass(`expander-symbol-down`);

		});

		// click on expander
		expander.off('click');	// remove any previous click event on this expander
		expander.on("click", (event)=>{
			let target = $(event.currentTarget);
			target.toggleClass("expander-symbol-down");
			target.toggleClass("expander-symbol-right");
			target.text( target.text()==String.fromCharCode(9660)?String.fromCharCode(9654):String.fromCharCode(9660) );
			target.siblings(".node-content").children(`div[xgui-type=tree-node]`).toggle();
		});

		// click on values
		let tree_values = $(`div[xgui-type=tree-value]`);
		tree_values.on("mousedown", (event)=>{
			this.onMouseDownValue(event);
		});

	}
}
