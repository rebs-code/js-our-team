# Pagina "Our Team" con oggetti JS

Questo programma crea un elemento HTML simulando la pagina di presentazione di un team con focus sugli Oggetti di JS. 

## Descrizione del codice

1- Creo un array di oggetti con le informazioni del team.

Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg

let team = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        pic: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        pic: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        pic: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        pic: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        pic: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        pic: "barbara-ramos-graphic-designer.jpg"
    }
];

2- Milestone 1: Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
team.forEach(member => {
    console.log(`Name: ${member.name}`);
    console.log(`Role: ${member.role}`);
    console.log(`Photo: ${member.pic}`);
});

// Milestone 2: Stampare le stesse informazioni su DOM sottoforma di stringhe

const teamContainer = document.getElementById("team-container");

team.forEach(member => {
    const memberInfo = document.createElement("div");
    memberInfo.innerHTML = `
        <p>Name: ${member.name}</p>
        <p>Role: ${member.role}</p>
        <p>Photo: ${member.pic}</p>
    `;
    teamContainer.appendChild(memberInfo);
});

3- Bonus 1: Trasformare la stringa foto in una immagine effettiva

team.forEach(member => {
    const memberInfo = document.createElement("div");
    const image = document.createElement("img");
    image.src = member.pic;
    memberInfo.appendChild(image);
    teamContainer.appendChild(memberInfo);
});

4- Bonus 2: Organizzare i singoli membri in card/schede

team.forEach(member => {
    const memberCard = document.createElement("div");
    memberCard.classList.add("member-card");
    memberCard.innerHTML = `
        <img src="${member.pic}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>${member.role}</p>
    `;
    teamContainer.appendChild(memberCard);
});
    
