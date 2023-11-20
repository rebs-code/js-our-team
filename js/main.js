"use strict";

// functions

//funzione stampa team
function printTeam(team) {
    team.forEach(member => {
        console.log(`Name: ${member.name}`);
        console.log(`Role: ${member.role}`);
        console.log(`Photo: ${member.pic}`);
    });
}

//funzione stampa team in pagina
function printTeamHTML(team, container) {
team.forEach(member => {
    const memberInfo = document.createElement("div");
    memberInfo.innerHTML = `
        <p>Name: ${member.name}</p>
        <p>Role: ${member.role}</p>
        <img src="./img/${member.pic}" alt="${member.name}">
    `;
    container.appendChild(memberInfo);
    document.body.appendChild(container);
});}

// execution

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

const teamContainer = document.createElement("div");
document.body.appendChild(teamContainer);

printTeam(team);
printTeamHTML(team, teamContainer);