export default class xGuiTabs{


	constructor(){

		// stops the "a" element doing website linking
		$("div[xgui-type=tabs] a").on("click", (event)=>{
			event.preventDefault();
		});

		$("div[xgui-type=tabs] div").each(( index:number, element: HTMLElement)=>{
			let sel:boolean = $(element).attr("selected")?true:false;

			let a:JQuery = $(element).find("a");
			let href:string = a.attr("href");
			
			if (sel){
				$(href).show();
			} else{
				$(href).hide();
			}
		});

		$(`div[xgui-type=tabs] div`).on("click", (event)=>{
		
			// hide all panels
			$(event.currentTarget).closest("div[xgui-type=tabs]").find("a").each(( index:number, element: HTMLElement)=>{
				let href:string = $(element).attr("href");
				$(href).hide();
			});

			// remove selected from all tab divs
			$(event.currentTarget).closest("div[xgui-type=tabs]").find("div").each(( index:number, element: HTMLElement)=>{
				$(element).removeAttr("selected");
			});

			// select the correct tab
			$(event.currentTarget).attr("selected", "selected");

			// show the selected panel
			let panel_id = $(event.currentTarget).find("a").attr("href");
			$(panel_id).show();
		});
	}

}