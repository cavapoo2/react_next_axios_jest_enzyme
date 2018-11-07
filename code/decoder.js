'use strict';
const code = ['','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P',
'Q','R','S','T','U','V','W','X','Y','Z'];
module.exports = {
    decoder: function decode(data) {
        let numbers = data.map(v => parseInt(v,10)) //data was validated on client side!
        let result = [];
        for(let i =0; i < numbers.length; i++) {
            if(data[i] >= 27 ) {
                let t = numbers[i];
                let notInt=false;
                while(t >= 27) {
                    t = t / 27;
                    if(Number.isInteger(t) === false) {
                        notInt=true;
                        break;
                    }
                }
                if(notInt === true) {
                    result.push(' ');
                }else {
                    result.push(code[t])
                }
            }else {
                result.push(code[data[i]])
            }
        }
        return result;

    }
}