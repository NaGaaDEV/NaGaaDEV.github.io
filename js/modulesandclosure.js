window.onload = function(){
    document.getElementById("createAcc").addEventListener("click", () => {
        accountInfoList.push(Account.create(document.getElementById("name").value, document.getElementById("deposit").value));
        let list = "";
        for (let i = 0; i < accountInfoList.length; i++) {
            list += "Account Name : " + accountInfoList[i].name + ", Deposit : " + accountInfoList[i].deposit + "\n";
        }
        document.getElementById("txt").value = list;
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

