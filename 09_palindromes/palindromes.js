const palindromes = function (pal) {
    pal = pal.toLowerCase();
    pal = pal.replace(/\s/g, '');
    pal = pal.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    let baseline = pal;
    array = pal.split('');
    let rev = array.reverse();
    rev = rev.join('');
    if (rev === pal) return true;
    else return false;
    

};

// Do not edit below this line
module.exports = palindromes;
