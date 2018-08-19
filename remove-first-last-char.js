function removeChar(str){
    return str.substring(1, str.length - 1)
}

// MDN-based solution

/* function removeChar(str){
    return str.slice(1, -1);
}

Best practice Codewars solution */

removeChar('eloquent');
removeChar('country');
removeChar('person');
removeChar('place');