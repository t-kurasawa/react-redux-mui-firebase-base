const todos = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_TODO':
      console.log("+++++ reducer todos LOAD_TODO")
      let todos = []
      if (action.data){
        Object.keys(action.data).forEach(key =>{
          let todo = action.data[key];
          todos.push({
            key: key,
            text: todo.text,
            completed: todo.completed,
          })
        });
      }
      return [...todos]    
      
    default:
      return state
  }
}

export default todos