import * as url from 'url';


const config = {
    PORT: 5050,
    DIRNAME: url.fileURLToPath(new URL('.', import.meta.url)),
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
    get UPLOAD_DIR() { return `${this.DIRNAME}/public/uploads` }
};


export const users = [
    { id: 1, firstName: 'Agu', lastName: 'Rod' },
    { id: 2, firstName: 'Nati', lastName: 'Rub' }
    

];


export default config;
