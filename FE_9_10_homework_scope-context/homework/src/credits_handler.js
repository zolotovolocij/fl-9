let userCard = (key) => {
    let balance = 100;
    let limit = 100;
    let historyLog = [];
    let numForTaxes = 200;
    
    let getCardOptions = () => {
        return {key, balance, limit, historyLog};
    };
    
    let putCredits = (put) => {
        balance += put;
        historyLog.push({
            operationType: 'Recieved Credits',
            credits: put,
            operationTime: new Date().toLocaleString() 
        });
    };
    
    let takeCredits = (take) => {
        if (take >= limit && take > balance){
            console.log('error');
        }else{
        balance = balance - take;
        }
        historyLog.push({
            operationType: 'Withdrawal of Credits',
            credits: take,
            operationTime: new Date().toLocaleString() 
        });
    };
    
    let setTransactionLimit = (lim) => {
        limit = lim;
        historyLog.push({
            operationType: 'Transaction limit change',
            credits: lim,
            operationTime: new Date().toLocaleString() 
        });
    };
    
    let transferCredits = (trans, card) => {
        if ( balance >= trans + trans/numForTaxes ) {
            if ( limit >= trans ) {
                takeCredits(trans+trans/numForTaxes);
                card.putCredits(trans);
            } else {
                console.log('error');
            }
        } else {
            console.log('error');
        }
    };
    return {
        getCardOptions: getCardOptions,
        putCredits: putCredits,
        takeCredits: takeCredits,
        setTransactionLimit: setTransactionLimit,
        transferCredits: transferCredits
    }
}

class UserAccount{
    constructor (name){
        this.name = name;
        this.cards = [];
        this.ceilnumber = 3;    
    }
    addCard(){
        if (this.cards.length >= this.ceilnumber){
            console.log('error');
        } else {
 this.cards.push(userCard(this.cards.length + 1));
        }
    }    
    getCardByKey(index){
                return this.cards[index - 1];
    }
}