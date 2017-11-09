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
      
    case 'TOGGLE_TODO':
      console.log("+++++ reducer todos TOGGLE_TODO")
      return state.map(todo => 
        (todo.key === action.key) 
          ? {...todo, completed: !todo.completed}
          : todo
      )
      
    default:
      return state
  }
}

export default todos