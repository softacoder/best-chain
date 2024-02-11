class TransactionPool {
  constructor() {
    this.transaction = [];
  }

  updateOrAddTransaction(transaction) {
    let transactionWithId = this.transactions.find(
      (t) => t.id === transaction.id
    );

    if (transactionWithId) {
      this.transactions[transactions.indexOf(transactionWithId)] = transaction;
    } else {
      this.transactions.push(transaction);
    }
  }
  existingTransaction(address) {
    return this.transactions.find(
      (transaction) => transaction.input.address === address
    );
  }
}

module.exports = TransactionPool;
