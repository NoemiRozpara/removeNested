# Remove element from array of objects
  
Helper for removing objects using computed nested key names.  
  
Before:  

    const users = [...this.state.users];
    const userIndex = users.length
      ? users.findIndex(user => user.name && user.name.first === 'John')
      : -1;
    userIndex > -1 && users.splice(userIndex, 1);
    this.setState({ users });
    
After: 
  
    const users = removeFromArray(this.state.users, 'name.first', 'John');
    this.setState({ users });
    
* Works for unlimited keys chain length (accepts string, can be single key name or names seperated by dots)   
* If element wasn't found returns original array  
* If element was found, returns new array - immutable function
