const ingredientet = [];
        const ulElement = document.getElementById("ingredientet");
        ingredientet.forEach(ingredient => {
            const liElement = document.createElement("li");
            liElement.textContent = ingredient;
            ulElement.appendChild(liElement);
        }); 
