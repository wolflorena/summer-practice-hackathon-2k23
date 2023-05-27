const cardsContainer = document.getElementById("cards");
let cards = [];

window.onload = function () {
  const storedCards = localStorage.getItem("cards");
  if (storedCards) {
    cards = JSON.parse(storedCards);
    console.log(cards);
    cards.forEach((card) => {
      renderCards(card);
    });
  }
};

function addCard(name, code) {
  let card = {
    id: code,
    name: name,
  };

  cards.push(card);
  saveCardsToLocalStorage();
  renderCards(card);
}

function renderCards(card) {
  let cardHtml = `<div class="card" id=${card.id}>
                <h2 id="code-${card.id}">${card.id}</h2>
                <h4>${card.name}</h4>
                <button onclick="deleteCard(${card.id});">
                    <i class="fa-solid fa-trash "></i>
                </button>
            </div>`;

  const newCard = document.createElement("div");
  newCard.innerHTML = cardHtml;
  cardsContainer.appendChild(newCard);

  const codeElement = document.getElementById(`code-${card.id}`);
  if (codeElement) {
    codeElement.textContent = card.id;
  }
  setInterval(function () {
    const newCode = generateRandomNumber();
    if (codeElement) {
      codeElement.textContent = newCode;
    }
  }, 30000);
}

function saveCardsToLocalStorage() {
  localStorage.setItem("cards", JSON.stringify(cards));
}

function removeFromLocalStorage(id) {
  console.log(cards);
  cards = cards.filter((card) => card.id !== id);
  console.log(cards);

  saveCardsToLocalStorage();
}

function openPopup() {
  swal({
    content: {
      element: "input",
      attributes: {
        placeholder: "Enter name",
        type: "text",
      },
    },
    buttons: {
      cancel: true,
      confirm: true,
    },
  }).then((value) => {
    if (value) {
      addCard(value, generateRandomNumber());
    }
  });
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 900000) + 100000;
}

function deleteCard(id) {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this data!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    const cardToRemove = document.getElementById(id);
    if (willDelete && cardToRemove) {
      swal("Poof! Your imaginary file has been deleted!", {
        icon: "success",
      });
      cardToRemove.remove();
      removeFromLocalStorage(id);
    } else {
      swal("Your imaginary file is safe!");
    }
  });
}
