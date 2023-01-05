
// // Start listing your variables to save your data to buckets

// const BASE_URL = 'https://opentdb.com/api.php?amount=10'
// // line one take url and input it in a new window and you can get to see 
// // how to access the array, and everything inside of an array is an object
// const questionButton = document.querySelector('button')
// const main = document.querySelector('main') // in the html doc we want access the main "tag"
// // specifies the main content a document


// questionButton.addEventListener ('click', async (event)=>{

//     //when clicked it prevents the page data from refreshing//
//     event.preventDefault();

//     await fetch (BASE_URL) // this gets the info from url
//     .then ((res)=> res.json()) // this translates into the language it needs
//     .then ((data) => {  // this takes the new translated info
//       console.log (data)  // this thens console.log it
//       let questions = data.results // look into the inpect tools and find what the name & it says results: Array(10)}

// // Begin for loop to compile info at each index (refer to inspect tools under results array)
//       for (let i =0; i<questions.lenght; i++ ){
//         // manually create the article tag for the questions to go in
//         let article = document.createElement('article')
//         article.classList.add("card") 
//         let questions = `<article class="card">
//         <h2>${questions[i].category}</h2>
//         <p>${questions[i].question}</p>
//         <button>Show Answer</button>
//         <p class="hidden">${questions[i].correct_answer} </p>
//       </article>`


// // we took the entire html syntax (interface) and added string 
// //interpoltation values.  Original syntax looked like this initially looked like this: 
// // <article class="card">
// // <h2>CATEGORY</h2>
// // <p>QUESTION</p>
// // <button>Show Answer</button>
// // <p class="hidden">CORRECT ANSWER</p>
// // </article>
// // card class is an actual card like image


//  article.innerHTMl = questions;
//  // line 39 takes the element and INPUT inside the html document
//  main.prepend(article);


// // line 43 tells the button what to click 
//  let answerButton = document.querySelector('.card button') //this will selct the card button in this
// html:
//  <article class="card">
//   <h2>CATEGORY</h2>
//   <p>QUESTION</p>
//   <button>Show Answer</button>
//   <p class="hidden">CORRECT ANSWER</p>
// </article>


//  let answer= document.querySelector('.hidden') // in document html answer can 
//     // be found under the class "hidden" so we selct this element

//  answerButton.addEventListener('click',() => {
    
//     answer.classList.toggle ('hidden')
//     // line 49 takes the answer and 
//  });

    

// }
//     })

//     .catch((error) => {
//         console.log(error)
//       }
    
    
//     )

//     })


    // json is used for easily transmitting data
    // between web applications*/
    //the api url



const BASE_URL = "https://opentdb.com/api.php?amount=10";

//get the button
const questionButton = document.querySelector("button");
//get the main section
const main = document.querySelector("main")

questionButton.addEventListener("click", async (event) => {
    //prevent the button from doing what it normally would
    event.preventDefault();

    //fetch the url
    await fetch(BASE_URL)
        .then((res) => res.json())
        //get the data
        .then((data) => {
            console.log(data)
            //save the array to a variable
            let questions = data.results;
            //loop through array
            for (let i = 0; i < questions.length; i++){
                //create the article tag for the questions to go in
                let article = document.createElement("article");
                //give it a class of card and answer at i
                article.classList.add("card", `answer${i}`);

                //make a variable for the actual question
                let question = `
                <h2>${questions[i].category}</h2>
                <p>${questions[i].question}</p>
                <button>Show Answer</button>
                <p class="hidden answer${[i]}">${questions[i].correct_answer}</p>`;
                //give the article the question data as the innerHTML
                article.innerHTML = question;
                //put the question inside at the end of main
                main.append(article);


                //ANSWER BUTTON
                //get the asnwer button
                let answerButton = document.querySelector(`.answer${[i]} button`);

                //get the answer paragraph
                let answer = document.querySelector(` p.answer${[i]}`);

                //tell button what to do when clicked
                answerButton.addEventListener("click", () => {
                    //change the class on that paragraph
                    answer.classList.toggle("hidden");
                })
            }
        })
        .catch((err) => {
            console.log(err);
        })
})