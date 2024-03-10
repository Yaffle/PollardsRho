
const fs = require('fs');

const name = process.argv[2] || '';

const filePath = './' + name + '.wasm';
const filePath1 = './' + name + '.js';

fs.readFile(filePath, (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  const byteArr = Array.from(data);
  const textString = `
    const wasmCode = new Uint8Array([${byteArr.join(', ')}]);
    const wasmModule = new WebAssembly.Module(wasmCode);
    const exports = new WebAssembly.Instance(wasmModule).exports;
    export default exports.${name};
  `;
  fs.writeFile(filePath1, textString, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return;
    }
  });
});
