let todoInput = document.querySelector('#todo-input')
let cnt = document.querySelector(".cnt")

const state = {
  state:"wewe",
  getState : function(){
    return this.state
  },
  setState : function(newState){
    this.state = newState
  }
}



todoInput.addEventListener('keydown', (e) => {
  // console.log(e)
  if (e.key === 'Enter') {
    if (e.target.value.trim() === '') {
      M.toast({ html: 'Pls enter any symbols' })
      e.target.value = ''
      return
    }
    drawTodo(e.target.value)
  }
})

function drawTodo(text) {
  console.log(text)
  let div = document.createElement('div')
  div.classList.add('collection')
  console.log(div)


  let a = document.createElement('a')
  a.classList.add('collection-item')
  a.href = '#'
  a.innerText = text

  let span = document.createElement('span')
  span.classList.add('badge')
  a.appendChild(span)

  let i1 = document.createElement('i')
  i1.innerHTML = 'check_box_outline_blank'
  i1.classList.add('material-icons')
  

  let i2 = document.createElement('i')
  i2.innerHTML = 'delete_forever'
  i2.classList.add('material-icons')
  span.appendChild(i1)
  span.appendChild(i2)

  div.appendChild(a)
  console.log(div)
  cnt.appendChild(div)
}
/* 
<div class="collection">
  <a href="#" class="collection-item">
    <span class="badge">
      <i class="material-icons" id="check-box">
        check_box_outline_blank
      </i>
      <i class="material-icons" id="check-box">
        delete_forever
      </i>
    </span>
    Alan
  </a>
  
</div>
*/
