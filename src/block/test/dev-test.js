const Block = require('../index');

const fooBlock = Block.mineBlock(Block.genesis(), 'foo');
console.log(fooBlock.toString())