const Block = require("./block");

class Blockchain {
  constructor() {
    this.chain = [Block.genesis()];
  }

  addBlock(data) {
    const block = Block.mineBlock(this.chain[this.chain.length - 1], data);
    this.chain.push(block);

    return block;
  }

  isValidChain(chain) {
    if(JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())) return false;

    
}

module.exports = Blockchain;
