
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

const weaponText = "David pode utilizar seus amuletos para encarar diversas situações, seja para identificar uma criatura ou mesmo em combate.";
const cromoText = "David lança uma de suas âmpolas de água benta no inimigo, causando pouco dano mas com acerto garantido.";


let david;


function increaseAttribute(propertyName, element){
	david[propertyName] ++;
	element.innerHTML = david[propertyName];
}

function decreaseAttribute(propertyName, element){
	david[propertyName] --;
	element.innerHTML = david[propertyName];
}

function increaseEurodollar(){
	let value = parseInt(prompt("Insira o valor recebido:"));
	if (value !== "" && value !== null){
		david.eurodollar += value;
	}
	eurodollarValue.innerHTML = david.eurodollar;
	window.localStorage.setItem("david_key", JSON.stringify(david));
}

function decreaseEurodollar(){
	let value = parseInt(prompt("Insira o valor gasto:"));
	if (value !== "" && value !== null){
		david.eurodollar -= value;
	}
	eurodollarValue.innerHTML = david.eurodollar;
	window.localStorage.setItem("david_key", JSON.stringify(david));
}

function displayAttributes(){
	lifeValue.innerHTML = david.life;
	sandevistanValue.innerHTML = david.sandevistanValue;
	lifeBar.style.width = `${percentage(david.life, david.maxLife)}%`;
	sandevistanValueBar.style.width = `${percentage(david.sandevistanValue, david.maxSandevistanValue)}%`;
	strengthAttribute.innerHTML = david.strength;
	hackingAttribute.innerHTML = david.hacking;
	accuracyAttribute.innerHTML = david.accuracy;
	agilityAttribute.innerHTML = david.agility;
	stealthAttribute.innerHTML = david.stealth;
	weapon.innerHTML = david.weapon;
	cromo.innerHTML = david.cromo;
	eurodollarValue.innerHTML = david.eurodollar;
}

function resetStats(){
	window.localStorage.removeItem("david_key");
	getDavid();
	displayAttributes();
	confirmResetScreen.classList.add("d-none");
}


const getDavid = () =>{
	try {
	//Variável recebendo o objeto salvo (não significa que ele exista, sendo assim, o teste não falha mesmo se o objeto não existir)
		david = JSON.parse(window.localStorage.getItem("david_key"));
	//Já a partir daqui, o código tenta atribuir os valores salvos no objeto da variável aos elementos html, algo que só vai acontecer se a variável david possuir esses valores, ou seja, se ela recebeu um objeto salvo no localStorage.
	
	//Se os elementos não conseguirem receber os valores, significa que essees valores não existem, assim como o objeto requisitado, então o teste falha e passa para o catch
		lifeValue.innerHTML = david.life;
		sandevistanValue.innerHTML = david.sandevistanValue;
		lifeBar.style.width = `${percentage(david.life, david.maxLife)}%`;
		sandevistanValueBar.style.width = `${percentage(david.sandevistanValue, david.maxSandevistanValue)}%`;
		strengthAttribute.innerHTML = david.strength;
		hackingAttribute.innerHTML = david.hacking;
		accuracyAttribute.innerHTML = david.accuracy;
		agilityAttribute.innerHTML = david.agility;
		stealthAttribute.innerHTML = david.agility;
		weapon.innerHTML = david.weapon;
		cromo.innerHTML = david.cromo;
		eurodollarValue.innerHTML = david.eurodollar;
	}
	catch {
		david = {
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
		eurodollar: 0
		};
	}
	finally{
		displayAttributes();
	}
};

getDavid();


function percentage(numA, numB){
	return (numA/numB) * 100;
}

function changeHpSa(bar, barValue, propertyName, maxPropertyName){
	let newValue = parseInt(prompt("Insira o novo valor:"));
	if (newValue !== "" && newValue !== null && newValue !== NaN){
		if (newValue > david[maxPropertyName]){
			david[maxPropertyName] = newValue;
		}
		david[propertyName] = newValue;
		bar.style.width = `${percentage(david[propertyName], david[maxPropertyName])}%`;
	}
	barValue.innerHTML = david[propertyName];
	window.localStorage.setItem("david_key", JSON.stringify(david));
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
		window.localStorage.setItem("david_key", JSON.stringify(david));
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
