const init = () => {
    let form = document.querySelector('form')
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = document.querySelector('input#searchByID');
      
        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(response => response.json())
        .then(data => {
          const title = document.querySelector('#movieDetails h4')
          const content = document.querySelector('#movieDetails p')
          if(data.title === undefined && data.summary === undefined){
            title.innerText = "Search not found"
            content.innerText = "Please enter a valid ID"
          }
          else {
            title.innerText = data.title
            content.innerText = data.summary
          }
         
        });
      });

}
document.addEventListener('DOMContentLoaded', init);