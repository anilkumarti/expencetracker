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
 axios.post("https://crudcrud.com/api/48999725a9c643b594c0872c219bf71d/expense", myObj)
 .then(response=> {
  
  display(response.data);
 })
 .catch(err=> { console.log(err);
  document.body.innerHTML+= '<h3> Something went wrong</h3>'
 })
 //  localStorage.setItem(list,JSON.stringify(myObj))
//  display(myObj);
//  e.target.reset()


}  window.addEventListener("DOMContentLoaded", ()=> {
  axios.get("https://crudcrud.com/api/48999725a9c643b594c0872c219bf71d/expense")
  .then((response)=> {
    for(var i=0;i<response.data.length;i++)
    {
      display(response.data[i])
    } console.log("this is refresed")
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
  axios.get('https://crudcrud.com/api/48999725a9c643b594c0872c219bf71d/expense')
  .then(((res)=> {
    let id;
      res.data.forEach((item)=> {
        console.log(item)
        if(item.list==list)
        {
          id = item._id; 
        }
      })

    axios.delete(`https://crudcrud.com/api/48999725a9c643b594c0872c219bf71d/expense/${id}`)
    .then((response)=> { 
      console.log("data deleted")
      

    })
    .catch(err=> console.log(err));
   }))
   .catch(err=> console.log(err));

 
} function editDetail(list)
{  axios.get('https://crudcrud.com/api/48999725a9c643b594c0872c219bf71d/expense')
  .then((res)=> { 
     let key;
     res.data.forEach((item)=> {   
      console.log(item.list);
      if(item.list==list)
      { 
        key=item;
       
      }
     })
     document.getElementById('amount').value=key.amount;
     document.getElementById('details').value=key.details;
     deleteUser(list);
  })
  .catch(err=>console.log(err))
  
      
//   let obj=JSON.parse(localStorage.getItem(list));
//   let amount=obj.amount;
//   let details=obj.details;

//   document.getElementById('amount').value=amount;
//    document.getElementById('details').value=details;

//  document.querySelector(`li[data-list="${list}"]`).remove()
//   localStorage.removeItem(list);
// 
}