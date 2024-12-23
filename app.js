
// const userCards = document.querySelector("#userId")

const userId = document.getElementById('userId');


//hier über Promise zur Info:
// new Promise ((resolve, reject) =>{
// if(false){
//     resolve("success");
// }else{
//     reject("error")
// }
// })

// .then((data) => {
//     console.log(data)

// })
// .catch((data)=>{
//     console.log(data)
// })



    // // daten von der API fetch (abrufen) und auf der Homepage darstellen
    // function getAllUsers() {


    //     // Users von der API abrufen (Fetch)
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //       .then(response => response.json()) // JSON data parsen
    //       .then(users => {
    //         // HTML direkt hier für jede User card generieren
    //         const userCards = users.map(user => {
    //           return `
    //             <div class="cards">
    //             <p>Name: ${user.name}</p>
    //             <p>Email: ${user.email}</p>
    //             <p>Adress: ${user.address.street}, ${user.address.suite}, ${user.address.city}</p>
    //             </div>
    //           `;
    //         });
  
    //         // die Benutzerkarten in den Container Einführen
    //         userId.innerHTML = userCards.join('');
    //       })
    //       .catch(error => {
    //         // Error behandeln
    //         console.log('Error fetching data:', error);
    //       })
    //       .finally(() => {
    //         //  Eventuell abschließende Schritte, loading spinner löschen
    //         console.log('fertig');
    //       });
    //   }
  
    //   // die Funktion aufrunfen
    //   getAllUsers();


      // სერვერიდან წამოიღეთ მონაცემები ამ endpoint-ის გამოყენებით https://jsonplaceholder.typicode.com/users
      //ჯავასკრიპტის გამოყენებით გამოიტანეთ  შემდეგი ინფორმაცია: name, email და address;
      // დაამატეთ სტილებიც რომ ვიზუალურად კარგად გამოიყურებოდეს, სასურველი იქნება გამოიყენოთ grid-template-columns: repeate(3,1fr) სტრუქტურა, რომ ქარდები სამ-სამ ბლოკებად იყოს განაწილებული.

      function getUsers(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(resp => resp.json())
        .then(users =>{
          const UserCardsOnHomepage = users.map(
            (el) =>
             `
            <div class="cards">
            <p>Name: ${el.name}</p>
            <p>E-Mail: ${el.email} </p>
            <p>Adress: ${el.address.street}, ${el.address.suite}, ${el.address.city}</p>
            </div>
            `
        );
          return userId.innerHTML = UserCardsOnHomepage.join('')
        })
        .catch(error =>{
          console.log('fetch error', error);
        })
        .finally(() =>{
          console.log("fin")
        })
      }
      getUsers();