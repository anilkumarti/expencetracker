const exsub=document.querySelector('.submit');
const ul=document.querySelector('.item')
exsub.addEventListener('click',expenseShow);
function expenseShow(e)
{ e.preventDefault();
  const amount=document.getElementById('amount').value;
  const details=document.getElementById('details').value;
  const type=document.getElementById('list').value;
  const show= amount+details+type;
  console.log(show)
  li=document.createElement('li');
  li.className="listItems";
  li.textContent=show;
  ul.appendChild(li)
  //add edit button
  const edit=document.createElement('button');
  edit.className="btn";
  edit.textContent='Edit';
  li.appendChild(edit);
//add close button
const closeoff=document.createElement('button');
closeoff.className="close delBtn";
closeoff.textContent='X';
li.appendChild(closeoff);

} 


ul.addEventListener('click',closeDetails);
function closeDetails(e) {
    if (e.target.classList.contains('delBtn')) {
      const li = e.target.closest('li');
      li.remove();
    }
  }
  ul.addEventListener('click',editDetails);
function editDetails(e) {
    if (e.target.classList.contains('btn')) {
      

        document.getElementById('amount').value=amount;
        document.getElementById('details').value=details;
  document.getElementById('list').value=type;
    }
  }
  