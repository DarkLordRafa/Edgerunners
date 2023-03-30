
const strengthIncreaseButton = document.querySelector("#strength-increase");
const strengthDecreaseButton = document.querySelector("#strength-decrease");
const hackingIncreaseButton = document.querySelector("#hacking-increase");
const hackingDecreaseButton = document.querySelector("#hacking-decrease");
const accuracyIncreaseButton = document.querySelector("#accuracy-increase");
const accuracyDecreaseButton = document.querySelector("#accuracy-decrease");
const agilityIncreaseButton = document.querySelector("#agility-increase");
const agilityDecreaseButton = document.querySelector("#agility-decrease");
const stealthIncreaseButton = document.querySelector("#stealth-increase");
const stealthDecreaseButton = document.querySelector("#stealth-decrease");
const eurodollarIncreaseButton = document.querySelector("#eurodollar-increase");
const eurodollarDecreaseButton = document.querySelector("#eurodollar-decrease");
const attributeButtons = document.querySelectorAll(".attribute-icon");
const resetButton = document.querySelector("#reset-button");
const confirmResetScreen = document.querySelector(".confirm-reset-screen");
const confirmResetButton = document.querySelector(".confirm-reset-button");
const cancelResetButton = document.querySelector(".cancel-reset-button");


const weaponIncreaseButton = document.querySelector("#weapon-increase");
const weaponDecreaseButton = document.querySelector("#weapon-decrease");
const cromoIncreaseButton = document.querySelector("#cromo-increase");
const cromoDecreaseButton = document.querySelector("#cromo-decrease");

const statsArea = document.querySelector(".stats-area");
const statsAreaToggleButton = document.querySelector(".character-stats-toggle-button");
const statsAreaSwitchButton = document.querySelector(".character-stats-switch-button");
const skillsArea = document.querySelector(".skills-area");



const lifeBar = document.querySelector(".life-bar");
const sandevistanValueBar = document.querySelector(".sandevistan-energy-bar");
const lifeValue = document.querySelector(".life-value");
const sandevistanValue = document.querySelector(".sandevistan-energy-value");


const strengthAttribute = document.querySelector("#strength");
const hackingAttribute = document.querySelector("#hacking");
const accuracyAttribute = document.querySelector("#accuracy");
const agilityAttribute = document.querySelector("#agility");
const stealthAttribute = document.querySelector("#stealth");
const eurodollarValue = document.querySelector("#eurodollar-value");


const skillDescriptionScreen = document.querySelector(".skill-description");
const skillDescriptionScreenCloseButton = document.querySelector(".skill-description .close-button");
const skillDescriptionText = document.querySelector(".skill-description p");
const weaponLabel = document.querySelector("#weapon-label");
const cromoLabel = document.querySelector("#cromo-label");

const weapon = document.querySelector("#weapon");
const cromo = document.querySelector("#cromo");

const weaponText = "Medley pode utilizar seus amuletos para encarar diversas situações, seja para identificar uma criatura ou mesmo em combate.";
const cromoText = "Medley lança uma de suas âmpolas de água benta no inimigo, causando pouco dano mas com acerto garantido.";


let medley;


function increaseAttribute(propertyName, element){
	medley[propertyName] ++;
	element.innerHTML = medley[propertyName];
}

function decreaseAttribute(propertyName, element){
	medley[propertyName] --;
	element.innerHTML = medley[propertyName];
}

function increaseEurodollar(){
	let value = parseInt(prompt("Insira o valor recebido:"));
	if (value !== "" && value !== null){
		medley.eurodollar += value;
	}
	eurodollarValue.innerHTML = medley.eurodollar;
	window.localStorage.setItem("medley_key", JSON.stringify(medley));
}

function decreaseEurodollar(){
	let value = parseInt(prompt("Insira o valor gasto:"));
	if (value !== "" && value !== null){
		medley.eurodollar -= value;
	}
	eurodollarValue.innerHTML = medley.eurodollar;
	window.localStorage.setItem("medley_key", JSON.stringify(medley));
}

function displayAttributes(){
	lifeValue.innerHTML = medley.life;
	sandevistanValue.innerHTML = medley.sandevistanValue;
	lifeBar.style.width = `${percentage(medley.life, medley.maxLife)}%`;
	sandevistanValueBar.style.width = `${percentage(medley.sandevistanValue, medley.maxSandevistanValue)}%`;
	strengthAttribute.innerHTML = medley.strength;
	hackingAttribute.innerHTML = medley.hacking;
	accuracyAttribute.innerHTML = medley.accuracy;
	agilityAttribute.innerHTML = medley.agility;
	stealthAttribute.innerHTML = medley.stealth;
	weapon.innerHTML = medley.weapon;
	cromo.innerHTML = medley.cromo;
	eurodollarValue.innerHTML = medley.eurodollar;
}

function resetStats(){
	window.localStorage.removeItem("medley_key");
	getMedley();
	displayAttributes();
	confirmResetScreen.classList.add("d-none");
}


const getMedley = () =>{
	try {
	//Variável recebendo o objeto salvo (não significa que ele exista, sendo assim, o teste não falha mesmo se o objeto não existir)
		medley = JSON.parse(window.localStorage.getItem("medley_key"));
	//Já a partir daqui, o código tenta atribuir os valores salvos no objeto da variável aos elementos html, algo que só vai acontecer se a variável medley possuir esses valores, ou seja, se ela recebeu um objeto salvo no localStorage.
	
	//Se os elementos não conseguirem receber os valores, significa que essees valores não existem, assim como o objeto requisitado, então o teste falha e passa para o catch
		lifeValue.innerHTML = medley.life;
		sandevistanValue.innerHTML = medley.sandevistanValue;
		lifeBar.style.width = `${percentage(medley.life, medley.maxLife)}%`;
		sandevistanValueBar.style.width = `${percentage(medley.sandevistanValue, medley.maxSandevistanValue)}%`;
		strengthAttribute.innerHTML = medley.strength;
		hackingAttribute.innerHTML = medley.hacking;
		accuracyAttribute.innerHTML = medley.accuracy;
		agilityAttribute.innerHTML = medley.agility;
		stealthAttribute.innerHTML = medley.agility;
		weapon.innerHTML = medley.weapon;
		cromo.innerHTML = medley.cromo;
		eurodollarValue.innerHTML = medley.eurodollar;
	}
	catch {
		medley = {
		life: 30,
		sandevistanValue: 60,
		maxLife: 30,
		maxSandevistanValue: 60,
		strength: 1,
		hacking: 1,
		accuracy: 1,
		agility: 1,
		stealth: 1,
		weapon: 1,
		cromo: 1,
		eurodollar: 5000
		};
	}
	finally{
		displayAttributes();
	}
};

getMedley();


function percentage(numA, numB){
	return (numA/numB) * 100;
}

function changeHpSa(bar, barValue, propertyName, maxPropertyName){
	let newValue = parseInt(prompt("Insira o novo valor:"));
	if (isNaN(newValue)){
		newValue = 00;
	}
	if (newValue !== "" && newValue !== null && newValue !== 00){
		if (newValue > medley[maxPropertyName]){
			medley[maxPropertyName] = newValue;
		}
		medley[propertyName] = newValue;
		bar.style.width = `${percentage(medley[propertyName], medley[maxPropertyName])}%`;
	}
	barValue.innerHTML = medley[propertyName];
	window.localStorage.setItem("medley_key", JSON.stringify(medley));
}


function displayDescriptionScreen(text){
	skillDescriptionScreen.classList.remove("d-none");
	statsAreaToggleButton.classList.add("pe-none");
	statsAreaSwitchButton.classList.add("pe-none");
	skillDescriptionText.innerHTML = text;
}



strengthIncreaseButton.addEventListener("click", function(){
	increaseAttribute("strength", strengthAttribute);
});

strengthDecreaseButton.addEventListener("click", function(){
	decreaseAttribute("strength", strengthAttribute);
});

hackingIncreaseButton.addEventListener("click", function(){
	increaseAttribute("hacking", hackingAttribute);
});

hackingDecreaseButton.addEventListener("click", function(){
	decreaseAttribute("hacking", hackingAttribute);
});

accuracyIncreaseButton.addEventListener("click", function(){
	increaseAttribute("accuracy", accuracyAttribute);
});

accuracyDecreaseButton.addEventListener("click", function(){
	decreaseAttribute("accuracy", accuracyAttribute);
});

agilityIncreaseButton.addEventListener("click", function(){
	increaseAttribute("agility", agilityAttribute);
});

agilityDecreaseButton.addEventListener("click", function(){
	decreaseAttribute("agility", agilityAttribute);
});

stealthIncreaseButton.addEventListener("click", function(){
	increaseAttribute("stealth", stealthAttribute);
});

stealthDecreaseButton.addEventListener("click", function(){
	decreaseAttribute("stealth", stealthAttribute);
});

weaponIncreaseButton.addEventListener("click", function(){
	increaseAttribute("weapon", weapon);
});

weaponDecreaseButton.addEventListener("click", function(){
	decreaseAttribute("weapon", weapon);
});

cromoIncreaseButton.addEventListener("click", function(){
	increaseAttribute("cromo", cromo);
});

cromoDecreaseButton.addEventListener("click", function(){
	decreaseAttribute("cromo", cromo);
});

eurodollarIncreaseButton.addEventListener("click", function(){
	increaseEurodollar();
})

eurodollarDecreaseButton.addEventListener("click", function(){
	decreaseEurodollar();
})

lifeValue.addEventListener("click", function(){
	changeHpSa(lifeBar, lifeValue, "life", "maxLife");
});

sandevistanValue.addEventListener("click", function(){
	changeHpSa(sandevistanValueBar, sandevistanValue, "sandevistanValue", "maxSandevistanValue");
});

attributeButtons.forEach(function(element){
	element.addEventListener("click", function(){
		window.localStorage.setItem("medley_key", JSON.stringify(medley));
	});
});

resetButton.addEventListener("click", function(){
	confirmResetScreen.classList.remove("d-none");
});

confirmResetButton.addEventListener("click", function(){
	resetStats();
});

cancelResetButton.addEventListener("click", function(){
	confirmResetScreen.classList.add("d-none");
});


statsAreaToggleButton.addEventListener("click", function(){
	statsAreaToggleButton.classList.toggle("character-stats-toggle-button-hidden");
	statsArea.classList.toggle("stats-area-disabled");
	statsAreaSwitchButton.classList.toggle("opacity-0");
	statsAreaSwitchButton.classList.toggle("pe-none");
});

statsAreaSwitchButton.addEventListener("click", function(){
	statsArea.classList.add("stats-area-disabled");
	setTimeout(function(){
		skillsArea.classList.toggle("d-none");
		statsArea.classList.remove("stats-area-disabled");
	}, 700);
});

skillDescriptionScreenCloseButton.addEventListener("click", function(){
	statsAreaToggleButton.classList.remove("pe-none");
	statsAreaSwitchButton.classList.remove("pe-none");
	skillDescriptionScreen.classList.add("d-none");
});

weaponLabel.addEventListener("click", function(){
	displayDescriptionScreen(weaponText);
});

cromoLabel.addEventListener("click", function(){
	displayDescriptionScreen(cromoText);
});
