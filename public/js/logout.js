async function logout(event) {
    event.preventDefault();
  
  
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  }

  document.querySelector('#logout').addEventListener('submit', logout);