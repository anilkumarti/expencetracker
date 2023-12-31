function localStore(e)
{ e.preventDefault();
 const amount=e.target.amount.value;
 const details=e.target.details.value;
 const list=e.target.list.value;
 const myObj= {
  amount:amount,
  details:details,
  list:list
 } 
 localStorage.setItem(list,JSON.stringify(myObj))
 display(myObj);
 e.target.reset()
 console.log("red")

} function display(myObj)
{
   const ele=document.getElementById('item');
  ele.innerHTML+=`<li data-list="${myObj.list}" > ${myObj.amount} - ${myObj.details} 
   <button class="del" onClick="editDetail('${myObj.list}')">Edit</button>
   <button class="ed" onClick="deleteUser('${myObj.list}')">X</button>
  </li>`
 
} function deleteUser(list)
{ let childEle=document.querySelector(`li[data-list="${list}"]`);
  childEle.remove();
  localStorage.removeItem(list);

 
} function editDetail(list)
{
  let obj=JSON.parse(localStorage.getItem(list));
  let amount=obj.amount;
  let details=obj.details;

  document.getElementById('amount').value=amount;
   document.getElementById('details').value=details;

  document.querySelector(`li[data-list="${list}"]`).remove()
  localStorage.removeItem(list);
}