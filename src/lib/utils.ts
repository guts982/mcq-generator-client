export function numberToLetter(number:number) {
    if (typeof number !== 'number' || number < 0) {
      return 'Invalid input';
    }
  
    const offset = 'A'.charCodeAt(0);
    const letter = String.fromCharCode(offset + number);
  
    return letter;
  }