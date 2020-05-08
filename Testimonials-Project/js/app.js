const Quotes = [

    {
        quote:
        "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
        author: " Life",
        imgs:"customer-0"
       
    },
    {
        quote:
          "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
        author: "John Kenneth Galbraith",
        imgs:"customer-1"
        
      },
      {
        quote:
          "God save me from my friends. I can protect myself from my enemies.",
        author: "Claude Louis Hector de Villars ",
        imgs:"customer-2"

      },
      {
        quote: "The price of anything is the amount of life you exchange for it.",
        author: "David Thoreau",
        imgs:"customer-3"

      },
      {
        quote:
          "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
        author: "Charles Lindbergh",
        imgs:"customer-4"

      },
      {
        quote:
          "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
        author: " Tyne Daly",
        imgs:"customer-3"

      }

];


const buttons = document.querySelectorAll('.btn');

let counter = 0;

buttons.forEach(button => {
    button.addEventListener('click',() => {
       
        const random = Math.floor (Math.random() * Quotes.length)

        if (button.classList.contains('prevBtn')) {
            counter -- ;
            if (counter < 0) {
               counter=  Quotes.length -1 
                
            }
            document.querySelector('#customer-img').src = `../img/${Quotes[random].imgs}.jpg`;
            document.querySelector('#customer-name').textContent = Quotes[random].author
            document.querySelector('#customer-text').textContent = Quotes[random].quote
            
        }
        if (button.classList.contains('nextBtn')) {
            counter ++ ;
            if (counter > 0) {
               counter =  Quotes.length +1 
                
            }
            document.querySelector('#customer-img').src = `../img/${Quotes[random].imgs}.jpg`;
            document.querySelector('#customer-name').textContent = Quotes[random].author
            document.querySelector('#customer-text').textContent = Quotes[random].quote
            
        }
        
        
    })
})