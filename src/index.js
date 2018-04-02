import './index.css';

import numeral from 'numeral';

const cValue = numeral(1000).format('$0.00');
debugger; //eslint-disable-line no-debugger
console.log(`I will pay ${cValue}`); //eslint-disable-line no-console