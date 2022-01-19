window.onload = function(){
    document.getElementById("createAcc").addEventListener("click", () => {
        accountInfoList.push(Account.create(document.getElementById("name").value, document.getElementById("deposit").value));
        let list = "";
        for (let i = 0; i < accountInfoList.length; i++) {
            list += "Account Name: " + accountInfoList[i].name + ", Deposit: " + accountInfoList[i].deposit + "\n";
        }
        document.getElementById("txt").value = list;
    });

    document.getElementById("rudyTimer").addEventListener("click", () => {
        setInterval(rudyTimer, 1000);
    });
}

var accountInfoList = new Array();

const Account = (function() {
    const create = (name, deposit) => {
          return {
          name: name,
          deposit: deposit
        }
    };
    
    return {
        create
    }
})();


var rudyTimer = (function() {
    var alertRudy = function() { document.getElementById("printRudy").innerHTML += "Rudy!" }
    return alertRudy;
})();

