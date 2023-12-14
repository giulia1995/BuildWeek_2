let arrayCard = [
  {
    immagine:
      "https://a0.muscache.com/im/pictures/085af180-b863-4757-834e-177348f2bf5c.jpg?im_w=720",
    titolo: "Varenna, Italia",
    host: "Host privato",
    data: "07-12",
    prezzo: "253 €",
    valutazione: "4,96",
  },
  {
    immagine:
      "https://a0.muscache.com/im/pictures/miso/Hosting-48151375/original/7858269d-68fb-4343-b7e0-620a207d78b8.jpeg?im_w=320",
    titolo: "Strömsund SV, Svezia",
    host: "Host privato",
    data: "04-09 gen",
    prezzo: "300 €",
    valutazione: "4,99",
  },
  {
    immagine:
      "https://a0.muscache.com/im/pictures/airflow/Hosting-34444025/original/274244de-652a-4e78-8ee4-1390375e6715.jpg?im_w=720",
    titolo: "Rælingen, Norvegia",
    host: "Host privato",
    data: "11-18 mag",
    prezzo: "226 €",
    valutazione: "5,0",
  },
  {
    immagine:
      "https://a0.muscache.com/im/pictures/02b09b7e-ce4b-4da1-bc03-b6f409e8a7d7.jpg?im_w=720",
    titolo: "Hiawassee, Georgia",
    host: "Host professionista",
    data: "04-09 gen",
    prezzo: "329 €",
    valutazione: "4,97",
  },
  {
    immagine:
      "https://a0.muscache.com/im/pictures/miso/Hosting-47771464/original/e8f6758f-1348-43f6-832a-066a90523068.jpeg?im_w=720",
    titolo: "Twizel, Nuova Zelanda",
    host: "Host professionista",
    data: "09-15 feb",
    prezzo: "250 €",
    valutazione: "4,3",
  },
  {
    immagine:
      "https://a0.muscache.com/im/pictures/51f4d564-3273-4f25-843d-54e17f6a8783.jpg?im_w=720",
    titolo: "Oia, Grecia",
    host: "Host professionista",
    data: "19-24 dic",
    prezzo: "754 €",
    valutazione: "4,96",
  },
  {
    immagine:
      "https://a0.muscache.com/im/pictures/miso/Hosting-47112045/original/894df3dd-d29b-40ae-8af0-253262155833.jpeg?im_w=720",
    titolo: "Lac-Beauport, Canada",
    host: "Host professionista",
    data: "10-15 mar",
    prezzo: "349 €",
    valutazione: "4,97",
  },
  {
    immagine:
      "https://a0.muscache.com/im/pictures/miso/Hosting-53722166/original/4db55141-6bd5-488d-9b66-a8cdaee3b5e6.jpeg?im_w=720",
    titolo: "Nendaz, Svizzera",
    host: "Host professionista",
    data: "14-19 dic",
    prezzo: "832€",
    valutazione: "4,96",
  },
];

let contenitore = document.querySelector(".container-card");
// let card = function () {
for (let i = 0; i < arrayCard.length; i++) {
  contenitore.innerHTML += `<div class="col-12 col-sm-6 col-md-4 col-lg-3 p-2 pb-4">
    <div class="card border-white">
      <div id="carosellocard${[i]}" class="carousel slide">
        <ion-icon name="heart" class="heart position-absolute"></ion-icon>
        <div class="carousel-indicators mb-0">
          <button
            type="button"
            data-bs-target="#carosellocard${[i]}"
            data-bs-slide-to="0"
            class="rounded-circle active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carosellocard${[i]}"
            data-bs-slide-to="1"
            class="rounded-circle"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carosellocard${[i]}"
            data-bs-slide-to="2"
            class="rounded-circle"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner rounded-3">
          <div class="carousel-item rounded-3 active">
            <img
              src=" ${arrayCard[i].immagine}"
              class="d-block w-100 rounded-3"
              alt="..."
            />
          </div>
          <div class="carousel-item rounded-3">
            <img
              src=" ${arrayCard[i].immagine}"
              class="d-block w-100 rounded-3"
              alt="..."
            />
          </div>
          <div class="carousel-item rounded-3">
            <img
              src=" ${arrayCard[i].immagine}"
              class="d-block w-100 rounded-3"
              alt="..."
            />
          </div>
        </div>
      </div>
      <div class="card-body d-flex flex-column p-0">
        <div class="d-flex justify-content-between align-items-center mt-3">
          <h5 class="card-title mb-0">${arrayCard[i].titolo}</h5>
          <div class="valuta d-flex align-items-center gap-1">
            <ion-icon name="star"></ion-icon>
            <a href="#" class="text-black">${arrayCard[i].valutazione}</a>
          </div>
        </div>
        <a href="#" class="text-secondary">${arrayCard[i].host}</a>
        <a href="#" class="text-secondary">${arrayCard[i].data}</a>
        <a href="#" class="text-black fw-semibold">${
          arrayCard[i].prezzo
        } notte</a>
      </div>
    </div>
    </div>`;
}
