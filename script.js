document.getElementById('fetch-button').addEventListener('click', function() {

// GET Request (Fetch data)

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => {
    console.log('GET response:', json);
    document.getElementById('data-container').innerHTML = `
        <h2>GET Request</h2>
        <p><strong>ID:</strong> ${json.id}</p>
        <p><strong>Title:</strong> ${json.title}</p>
        <p><strong>Completed:</strong> ${json.completed ? 'Yes' : 'No'}</p>
    `;
})
.catch(error => console.error('Error:', error)); 

// POST Request (Create new todo)

fetch('https://jsonplaceholder.typicode.com/todos', {
method: 'POST',
headers: {
    'Content-Type': 'application/json',
},
body: JSON.stringify({
    title: 'New Task',
    completed: false
})
})
.then(response => response.json())
.then(json => {
console.log('POST response:', json);
})
.catch(error => console.error('Error:', error)); 

// PUT Request (Update todo)

fetch('https://jsonplaceholder.typicode.com/todos/1', {
method: 'PUT',
headers: {
    'Content-Type': 'application/json',
},
body: JSON.stringify({
    id: 1,
    title: 'Updated Task',
    completed: true
})
})
.then(response => response.json())
.then(json => {
console.log('PUT response:', json);
})
.catch(error => console.error('Error:', error)); 

// DELETE Request (Delete todo)

fetch('https://jsonplaceholder.typicode.com/todos/1', {
method: 'DELETE'
})
.then(response => {
if (response.ok) {
    console.log('DELETE request successful');
    document.getElementById('data-container').innerHTML += `
        <h2>DELETE Request</h2>
        <p>Todo with ID 1 has been deleted.</p>
    `;
}
})
.catch(error => console.error('Error:', error));

 // PATCH Request (Partially update todo)

fetch('https://jsonplaceholder.typicode.com/todos/1', {
method: 'PATCH',
headers: {
    'Content-Type': 'application/json',
},
body: JSON.stringify({
    completed: true
})
})
.then(response => response.json())
.then(json => {
console.log('PATCH response:', json);
})
.catch(error => console.error('Error:', error));    
})  