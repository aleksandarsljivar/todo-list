function addElement(){
  let timeStamp = new Date();

  let title = document.getElementById('toDoTitle').value;
  let text = document.getElementById('toDoBody').value;
  document.getElementById('toDoTitle').value = '';
  document.getElementById('toDoBody').value = '';
  let li = document.createElement('li');
  if(title === '' || text === '') alert('You must enter text in both fields to add an item')
  if (title !== '' && text !== ''){
    li.innerHTML = `
      <h2 class="card-title">${title}</h2>
      <p class="card-text">${text}</p>`;
    document.getElementById('toDoList').prepend(li);
  }
  li.id = 'id';
  let time = document.createElement('small');
  time.textContent = timeStamp.toLocaleString('en-GB');
  time.className = 'card-time'
  li.append(time);
  
  li.onclick = () => {
    createRemoveButton(li);
    putCheckedToLast(li);
  };
}

function createRemoveButton(li){
  
  if (li.classList.contains('card-checked')) 
    return;

  li.classList.toggle('card-checked');
  let deleteBtn = document.createElement('button');
  deleteBtn.type = 'button';
  deleteBtn.textContent = 'Remove';
  deleteBtn.className = "card-removemBtn"  
  li.append(deleteBtn);
  deleteBtn.onclick = () => {
    removeElement(li);
    
  };
}

function putCheckedToLast(li){
  if (!li.classList.contains('card-checked')) 
    return;
  li.parentNode.appendChild(li);
}
      
function removeElement(element){
  element.parentNode.removeChild(element);
  event.stopPropagation();
}

function sortAsc(){
  let listElements = document.getElementsByTagName("li");
  let ulList = document.getElementById("toDoList");

  listElements = Array.prototype.slice.call(listElements)
    .filter(el => el.className !== 'card-checked')
    .sort((a, b) => b.lastChild.innerHTML.localeCompare(a.lastChild.innerHTML));
  
    listElements.forEach(el => ulList.prepend(el));
  }

function sortDesc(){
  let listElements = document.getElementsByTagName("li");
  let ulList = document.getElementById("toDoList");

  listElements = Array.prototype.slice.call(listElements)
    .filter(el => el.className !== 'card-checked')
    .sort((a, b) => a.lastChild.innerHTML.localeCompare(b.lastChild.innerHTML));

  listElements.forEach(el => ulList.prepend(el));
}