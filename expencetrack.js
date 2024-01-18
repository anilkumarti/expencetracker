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
 axios.post("https://crudcrud.com/api/2da2c1e60a394d3691088268ff317142/feestracker", myObj)
 .then(response=> {
  console.log("this is refresed")
  display(response.data);
 })
 .catch(err=> { console.log(err);
  document.body.innerHTML+= '<h3> Something went wrong</h3>'
 })
 //  localStorage.setItem(list,JSON.stringify(myObj))
//  display(myObj);
//  e.target.reset()


}  window.addEventListener("DOMContentLoaded", ()=> {
  axios.get("https://crudcrud.com/api/2da2c1e60a394d3691088268ff317142/feestracker")
  .then((response)=> {
    for(var i=0;i<response.data.length;i++)
    {
      display(response.data[i])
    }
  })
  .catch(err=> console.log(err))
})

function display(myObj)
{
   const ele=document.getElementById('item');
  ele.innerHTML+=`<li data-list="${myObj.list}" > ${myObj.amount} - ${myObj.details} 
   <button class="del" onClick="editDetail('${myObj.list}')">Edit</button>
   <button class="ed" onClick="deleteUser('${myObj.list}')">X</button>
  </li>`
 
} function deleteUser(list)
{ let childEle=document.querySelector(`li[data-list="${list}"]`);
  childEle.remove();
  // localStorage.removeItem(list);
  axios.get('https://crudcrud.com/api/2da2c1e60a394d3691088268ff317142/feestracker')
  .then(((res)=> {const id= res.data[0].id;
    axios.delete(`https://crudcrud.com/api/2da2c1e60a394d3691088268ff317142/feestracker/${id}`)
    .then((response)=> { 
      console.log("data deleted")
      display(response.data);

    })
    .catch(err=> console.log(err));
   }))
   .catch(err=> console.log(err));

 
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