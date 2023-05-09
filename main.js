const list_el = document.getElementById("list");
const create_btn_el = document.getElementById("create");

let todos = [];

create_btn_el.addEventListener('click', CreateNewTodo);

function CreateNewTodo () {
	const item = {
		id: new Date().getTime(),
		text: "",
		complete: false
	}

	todos.unshift(item);

	const { item_el, input_el } = CreateTodoElement(item);

	list_el.prepend(item_el);

	input_el.removeAttribute("disabled");
	input_el.focus();

	Save();
}

/* <div class="item">
	<input type="checkbox" />
	<input 
		type="text" 
		value="Todo content goes here" 
		disabled />
	<div class="actions">
		<button class="material-icons">edit</button>
		<button class="material-icons remove-btn">remove_circle</button>
	</div>
</div> */


function CreateTodoElement(item){
    const item_el = document.createElement("div");
    item_el.classList.add("item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.complete;

    if (item.complete){
        item_el.classList.add("complete");
    }

    const input_el = document.createElement("input");
    input_el.type = "text";
    input_el.value = item.text;
    input_el.setAttribute("disabled","");

    const action_el = document.createElement("div");
    edit_btn_el.classList.add("actions");
    edit_btn_el.innertext = "edit";

    const remove_btn_el = document.createElement("div");
    edit_btn_el.classList.add("material-icons", "remove-btn");
    edit_btn_el.innertext = "remove_circle";

    action_el.append(edit_btn_el);
    action_el.append(remove_btn_el);

    item_el.append(checkbox);
    item_el.append(input_el);
    item_el.append(actions_el);


    //events

    checkbox.addEventListener("change",() => {
        item.complete = checkbox.checked;

        if (item.complete){
            item_el.classList.add("complete");
        }else{
            item_el.classList.remove("complete");
        }

        Save();
    });

    input_el.addEventListener("input",() =>{
        item.text = input_el.value;
    });

    input_el.addEventListener("blur", () =>{
        input_el.setAttribute("disabled");
        Save();
    });

    edit_btn_el.addEventListener("click", () =>{
        input_el.removeAttribute("disabled");
		input_el.focus();
    });

	remove_btn_el.addEventListener("click", () => {
		todos = todos.filter(t => t.id != item.id);

		item_el.remove();

		Save();
	});

    return { item_el, input_el, edit_btn_el, remove_btn_el }





}

function Save(){

}