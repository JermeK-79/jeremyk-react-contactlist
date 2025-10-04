export const initialStore=()=>{
  return{
    message: null,
    contacts: [
      { name: "Emily Downs",
        phone:"417-436-8756",
        email:"edowns@gmail.com",
        address:"467 Duck Run Rd",
        id:18
      },
      { name:"Luke Downs",
        phone:"417-498-8756",
        email:"ldowns@gmail.com",
        address:"487 Duck Run Rd",
        id:19
      }
    ]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    default:
      throw Error('Unknown action.');
  }    
}
