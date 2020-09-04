let account = {name: "Stonks -", amount: 5000};
let account1 = {name: "Checking -", amount: -100};
let account2 = {name: "Savings -", amount: 0};
let account3 = {name: "Under Bed -", amount: 500};

let state = {
   pageHeader: "Current Accounts",
  account: [account, account1, account2, account3],
};

function renderAccount() {
  accountStr = "";
  state.account.forEach(function (account, index) {
    accountStr += `
    <div>
      ${account.name} Balance: ${account.amount}
      <span data-index='${index}' onclick='updateAccount(this)' >update</span>
      <span onclick='deleteAccount(${index})' >delete</span>
      </div>`;
  });
  return accountStr;

}

function deleteAccount(clickedIndex) {
  let newAccount = state.account.filter(function (account, index){
    console.log("index: ", index);
    console.log("clickedIndex: ", clickedIndex);
    console.log(clickedIndex != index);
    return clickedIndex != index;
  });

  state.account = newAccount;
  render();
} 

function updateAccount(accountDiv){
  let index = accountDiv.dataset.index;
  let account = state.account[index];

  let name = prompt("Enter account name")
  account.name = name;

  let amount = prompt("Enter amount");
  account.amount = amount;

  render();
}

function addAccount() {
  let account = {};

  let name = prompt("Enter account name");
  account.name = name;

  let amount = prompt("Enter amount");
  account.amount = amount;

  state.account.push(account);

  render();
}


function render() {
  htmlString = `<div>
                  <h1>${state.pageHeader}</h1>
                  <div onclick='addAccount()'>Add Account</div>
                  ${renderAccount()}
                </div>`;

  renderAccount();

  appElement = document.getElementById("accounts");
  appElement.innerHTML = htmlString;
}

render();