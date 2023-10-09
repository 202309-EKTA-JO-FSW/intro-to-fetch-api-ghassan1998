// Please read the README.md to understand what to do. Happy Coding !

async function fetchUserData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      
      const usersData = await response.json();
      
      
      const modifiedUsers = usersData.map(user => {
        const modifiedUser = {
          Name: user.name,
          Username: user.username,
          Email: user.email,
          Address: user.address.street,
          Phone: user.phone,
          Website: user.website,
          Company: user.company.name,
        };
        return modifiedUser;
      });
  
      
      console.log('Modified User Data:');
      console.log(modifiedUsers);
  
      
      const filteredUsers = modifiedUsers.filter(user => user.Email.endsWith('.biz'));
  
      
      console.log('Users with .biz email domain:');
      console.log(filteredUsers);
  
      
      const sortedUsers = modifiedUsers.sort((a, b) => a.Name.localeCompare(b.Name));
  
      
      console.log('Sorted User Data:');
      console.log(sortedUsers);
    } catch (error) {
      
      console.error('An error occurred:', error.message);
    }
  }
  

  fetchUserData();