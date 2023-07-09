// посилання на елементи ---
const hiddOptions = document.getElementById('hiddOptions');
const startAmountInp = document.querySelector('input[name="start"]');
const startForm = document.getElementById('startForm');
const incomeBtn = document.getElementById('income');
const outcomeBtn = document.getElementById('outcome');
const incomeList = document.getElementById('incomes');
const outcomeList = document.getElementById('outcomes');
const incomeAmount = document.getElementById('incAmnt');
const outcomeAmount = document.getElementById('outAmnt');
const currBalanceInput = document.getElementById('currBal');
const transactionList = document.getElementById('transactions');
const langUa = document.getElementById('langUA');
const langEn = document.getElementById('langEN');
const langRu = document.getElementById('langRU');

// слухачі ---
hiddOptions.addEventListener('change', hideBlock);
startForm.addEventListener('submit', aprooveAmt) ;
incomeBtn.addEventListener('click', addIncome);
outcomeBtn.addEventListener('click', addOutcome);
langRu.addEventListener('click', shitLang);
langUa.addEventListener('click', changeLangToUA);
langEn.addEventListener('click', changeLangToEN);

// глобальні змінні ---
let currBal = 0;
let incomeQuant = 0;
let incomeAmnt = 0;
let outcomeQuant = 0;
let outcomeAmnt = 0;
let transQuant = 0;
let currLanguage = 1;

// функції ---
function aprooveAmt(event) {
    event.preventDefault();
    currBal = startAmountInp.value;
    currBalanceInput.value = currBal;
    startAmountInp.setAttribute('readonly', 'true');
}
function addIncome () {
    let tempIncome;
    const inc = document.createElement('li');
    if (currLanguage) {
        tempIncome = Number(prompt('Введіть суму надходження', 0));
    if (isNaN(tempIncome)){
        alert('Введіть будь ласка число цифрами')
    } else {
    inc.textContent = tempIncome;
    incomeAmnt += tempIncome;
    currBal = Number(currBal)+tempIncome; 
    currBalanceInput.value = currBal;
    incomeQuant +=1;
    transQuant +=1;
    incomeAmount.textContent = `Сума надходжень: ${incomeAmnt}`;
    }} else {     
        tempIncome = Number(prompt('Enter the outcome amount', 0));
        if (isNaN(tempIncome)){
        alert('Enter the number')
    } else {
    inc.textContent = tempIncome;
    incomeAmnt += tempIncome;
    currBal = Number(currBal)+tempIncome; 
    currBalanceInput.value = currBal;
    incomeQuant +=1;
    transQuant +=1;
    incomeAmount.textContent = `Incomes amount: ${incomeAmnt}`;
    }}
    if (incomeQuant<3 && tempIncome>0){
        incomeList.prepend(inc);
    } else if (tempIncome>0) {
        incomeList.lastChild.remove();
        incomeList.prepend(inc);
    }
    if (transQuant<5 && tempIncome>0){
        transactionList.insertAdjacentHTML("afterbegin",`<li style="color: green;">+${tempIncome}</li>`);
    } else if (tempIncome>0) {
        transactionList.lastChild.remove();
        transactionList.insertAdjacentHTML("afterbegin",`<li style="color: green;">+${tempIncome}</li>`);
            }
    if (!startAmountInp.hasAttribute('readonly')) {
        startAmountInp.setAttribute('readonly', 'true');
    }
    }
function addOutcome () {
    let tempOutcome;
    const out = document.createElement('li');
    if (currLanguage) {
        tempOutcome = Number(prompt('Введіть суму витрати', 0));
    if (isNaN(tempOutcome)){
        alert('Введіть будь ласка число цифрами')
    } else {
    out.textContent = tempOutcome;
    outcomeAmnt += tempOutcome;
    currBal = Number(currBal)-tempOutcome; 
    currBalanceInput.value = currBal;
    outcomeQuant +=1;
    transQuant +=1;
    outcomeAmount.textContent = `Сума витрат: ${outcomeAmnt}`;
    }} else {     
        tempOutcome = Number(prompt('Enter the outcome amount', 0));
        if (isNaN(tempOutcome)){
        alert('Enter the number')
    } else {
    out.textContent = tempOutcome;
    outcomeAmnt += tempOutcome;
    currBal = Number(currBal)-tempOutcome; 
    currBalanceInput.value = currBal;
    outcomeQuant +=1;
    transQuant +=1;
    outcomeAmount.textContent = `Outcomes amount: ${outcomeAmnt}`;
    }}
    if (outcomeQuant<3 && tempOutcome>0){
        outcomeList.prepend(out);
    } else if (tempOutcome>0) {
        outcomeList.lastChild.remove();
        outcomeList.prepend(out);
    }   
    if (transQuant<5 && tempOutcome>0){
        transactionList.insertAdjacentHTML("afterbegin",`<li style="color: red;">-${tempOutcome}</li>`);
    } else if (tempOutcome>0) {
        transactionList.lastChild.remove();
        transactionList.insertAdjacentHTML("afterbegin",`<li style="color: red;">-${tempOutcome}</li>`);
    } if (!startAmountInp.hasAttribute('readonly')) {
        startAmountInp.setAttribute('readonly', 'true');
    }
}
function shitLang () {
    if (currLanguage) {
        alert('Te гімно нікому не потрібне :D')
    } else {
        alert('Nobody needs that shit :D')
    }
}
function changeLangToEN () {
    if (currLanguage===1) {
        currLanguage = 0;
        document.getElementById('hid').textContent = 'Hide data:';
        hiddOptions.options[0].textContent = 'Nothing';
        hiddOptions.options[1].textContent = 'Left part';
        hiddOptions.options[2].textContent = 'Right part';
        hiddOptions.options[3].textContent = 'Both';
        document.getElementById('pIncome').textContent = 'Incomes';
        incomeBtn.textContent = 'Add income';
        document.getElementById('lastIncomes').textContent = 'Last incomes:';
        incomeAmount.textContent = `Incomes amount: ${incomeAmnt}`;
        startForm.querySelector('h2').textContent = 'Starting capital :)';
        startAmountInp.placeholder = 'Enter the starting amount';
        document.querySelector('input[name="conf"]').value = 'Confirm';
        document.getElementById('pOutcome').textContent = 'Outcomes';
        outcomeBtn.textContent = 'Add outcome';
          document.getElementById('lastOutcomes').textContent = 'Last outcomes:';
        outcomeAmount.textContent = `Outcomes amount: ${outcomeAmnt}`;
        document.querySelector('.right > h2').textContent = 'Current balance';
        document.getElementById('lastTransactions').textContent = 'Last transactions';
    }
}
function changeLangToUA () {
    if (currLanguage===0) {
        currLanguage = 1;
        document.getElementById('hid').textContent = 'Приховати дані:'
        hiddOptions.options[0].textContent = 'Нічого';
        hiddOptions.options[1].textContent = 'Ліва частина';
        hiddOptions.options[2].textContent = 'Права частина';
        hiddOptions.options[3].textContent = 'Все';
        document.getElementById('pIncome').textContent = 'Надходення';
        incomeBtn.textContent = 'Додати надходження';
        document.getElementById('lastIncomes').textContent = 'Останні надходження:';
        incomeAmount.textContent = `Сума надходжень: ${incomeAmnt}`;
        startForm.querySelector('h2').textContent = 'Стартовий капітал :)';
        startAmountInp.placeholder = 'Введіть стартову суму';
        document.querySelector('input[name="conf"]').value = 'Підтвердити';
        document.getElementById('pOutcome').textContent = 'Витрати';
        outcomeBtn.textContent = 'Додати витрату';
        document.getElementById('lastOutcomes').textContent = 'Останні витрати:';
        outcomeAmount.textContent = `Сума витрат: ${outcomeAmnt}`;
        document.querySelector('.right > h2').textContent = 'Поточний стан гаманця';
        document.getElementById('lastTransactions').textContent = 'Попередні операції';
    }
}
function hideBlock () {
    const block1 = document.querySelector('.left');
    const block2 = document.querySelector('.right');
    if (hiddOptions.options[0].selected ){
    // if (block1.classList.contains('hidden') || block2.classList.contains('hidden')) {
        block1.classList.remove('hidden');
        block2.classList.remove('hidden');
    } else if (hiddOptions.options[3].selected){
        block1.classList.add('hidden');
        block2.classList.add('hidden');
    } else if (hiddOptions.options[1].selected) {
        block1.classList.add('hidden');
        block2.classList.remove('hidden');
    } else {
        block2.classList.add('hidden');
        block1.classList.remove('hidden');
    }
}
