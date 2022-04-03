function show()
{
  var  x = document.getElementById("Task").value;
  var ul = document.getElementById("item_show");
  var li = document.createElement("li");

  var editbtn = document.createElement("BUTTON");
  var deletebtn = document.createElement("BUTTON");

  deletebtn.addEventListener("click", removeItem);
  editbtn.addEventListener("click", editItem);

  li.className = "style_li";
  editbtn.className = "edit_li"
  deletebtn.className = "delete_li"

  document.getElementById("Task").value = "";  

  editbtn.appendChild(document.createTextNode("Edit"));
  deletebtn.appendChild(document.createTextNode("Delete"));
  li.appendChild(document.createTextNode(x));
  
  li.appendChild(editbtn);
  li.appendChild(deletebtn);

  ul.appendChild(li);

}

function removeItem(e)
{
 
var text="Are you sure you want to delete this task?";
  if(confirm(text)==true)
    {
      alert("Task Deleted");      item_show.removeChild(e.target.parentNode);
    }
  else
    {
      alert("Task Not Deleted");
    }
}

