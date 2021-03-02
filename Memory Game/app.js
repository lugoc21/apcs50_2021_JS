document.addEventListener('DOMContentLoaded', () => {

const cardArray = [
    {
        name: 'DS',
        img:  'Images/DarkSealItem.png'
    },
    {
        name: 'DS',
        img:  'Images/DarkSealItem.png'
    },
    {
        name: 'GA',
        img:  'Images/GuardianAngelItem.png'
    },
    {
        name: 'GA',
        img:  'Images/GuardianAngelItem.png'
    },
    {
        name: 'KS',
        img:  'Images/KrakenSlayerItem.png'
    },
    {
        name: 'KS',
        img:  'Images/KrakenSlayerItem.png'
    },
    {
        name: 'MB',
        img:  'Images/MikaelsBlessingItem.png'
    },
    {
        name: 'MB',
        img:  'Images/MikaelsBlessingItem.png'
    },
    {
        name: 'RB',
        img:  'Images/RageBladeItem.png'
    },
    {
        name: 'RB',
        img:  'Images/RageBladeItem.png'
    },
    {
        name: 'TF',
        img:  'Images/TrinityForceItem.png'
    },
    {
        name: 'TF',
        img:  'Images/TrinityForceItem.png'
    },
]

cardArray.sort(() => 0.5 - Math.random())
const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')

var cardschosen = []
var cardschosenId = []
var cardswon = []
//create game board

function createBoard(){
    for (let i = 0; i < cardArray.length; i++)
    {
        var card = document.createElement('img')
        card.setAttribute('src', 'Images/Blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

function checkForMatch()
{
    var cards = document.querySelectorAll('img')
    const optionOneId = cardschosenId[0]
    const optionTwoId = cardschosenId[1]

    if (cardschosen[0] === cardschosen[1]) 
    {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'Images/White.jpg')
        cards[optionTwoId].setAttribute('src', 'Images/White.jpg')
        cardswon.push(cardschosen)
    } 
    else 
    {
        cards[optionOneId].setAttribute('src', 'Images/Blank.png')
        cards[optionTwoId].setAttribute('src', 'Images/Blank.png')
        alert('Sorry, try again')
    }
      cardschosen = []
      cardschosenId = []
      resultDisplay.textContent = cardswon.length

    if  (cardswon.length === cardArray.length/2) 
    {
        resultDisplay.textContent = 'Congratulations! You found them all!'
    }
}

function flipCard() 
{
    var cardId = this.getAttribute('data-id')
    cardschosen.push(cardArray[cardId].name)
    cardschosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardschosen.length === 2)
    {
        setTimeout(checkForMatch, 500)
    }
}
createBoard()

})