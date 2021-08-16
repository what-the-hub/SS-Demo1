import {
    showChessDesk
} from '../src/task1.mjs';

mocha.setup('bdd');

let assert = chai.assert;

describe('showChessDesk', () => {

    it('height = 3, width = 3, symbol = &', () => {
        const stringResult = '& &\n & \n& &\n';
        const context = {
            width: 3,
            height: 3,
            symbol: "&"
        }
        assert.equal(showChessDesk(context), stringResult);
    });

    it('height = 10, width = 4, symbol = !', () => {
        const stringResult = '! ! \n ! !\n! ! \n ! !\n! ! \n ! !\n! ! \n ! !\n! ! \n ! !\n';
        const context = {
            width: 4,
            height: 10,
            symbol: "!"
        }
        assert.equal(showChessDesk(context), stringResult);
    });

    it('width and height !number or !integer or >0 , <=20', () => {
        const context = {
            width: "s",
            height: 10,
            symbol: "!"
        }
        assert.deepEqual(showChessDesk(context), {
            status: 'failed',
            reason: "Check your values. Width and Height must be: integer, natural, >0 , <=20. Symbol lenght must be 1"
        });
    });

    it('symbol.lenght != 1', () => {
        const context = {
            width: 10,
            height: 10,
            symbol: "!2"
        }
        assert.deepEqual(showChessDesk(context), {
            status: 'failed',
            reason: "Check your values. Width and Height must be: integer, natural, >0 , <=20. Symbol lenght must be 1"
        });
    });

    it('exist values', () => {
        const context = {
            width: "",
            height: "",
            symbol: ""
        }
        assert.deepEqual(showChessDesk(context), {
            status: 'failed',
            reason: "Check your values. Width and Height must be: integer, natural, >0 , <=20. Symbol lenght must be 1"
        });
    });
});

mocha.run();