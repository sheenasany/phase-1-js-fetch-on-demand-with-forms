const init = () => {
    
    //Access the form
    const form = document.querySelector('form')
    form.addEventListener ("submit", function(event) {
    event.preventDefault(); //keeps the page from refreshing
    

    const movieID = document.getElementById('searchByID').value
    
    if (movieID === "") alert("Error: Empty input. Please enter a value!")
        else {
            // Fetch the date from the db.json  
       fetch(`http://localhost:3000/movies/${movieID}`)
       .then((response) => {
        if (response.status === 404) return response.status;
         else return response.json();
        
        })

       .then((movie) => {
            // If we get a 404 error, the user sees an error alert
            if(movie === 404) {
                alert("Error: Page not found!");
            }
            // Otherwise, we update the title and summary as expected
            else {
            const title = document.querySelector("section#movieDetails h4");
            const summary = document.querySelector("section#movieDetails p");
            title.innerText = movie.title;
            summary.innerText = movie.summary;
            
              }
         })
    };
});
};

document.addEventListener('DOMContentLoaded', init);