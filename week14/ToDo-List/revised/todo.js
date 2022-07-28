function Todo({todo,index,remove}){
  function handle(){
    console.log('Ping:',index);
    remove(index);
  }
  return <div className="todo" onClick={handle}><span>{todo.text}</span><div className="done">DONE</div></div>
}
