/*
1. from a given string create all possible anagrams and populate an array with answers. 
2. make sure all anagrams are unique
3. what is the complexity of the solution
*/


var anagramIt = function(string) {

    var recurser = function(string, prefix, n = string.length){
        if (n === 0){
            return [prefix];
        } else {
            var output = [];
            for (let i =0; i < n; i++){
                var pre = string.substring(0, i);
                var post = string.substring(i+1)
                output.concat(recurser(pre + post, string[i] + prefix))
            }
            return output
        }
    }
    var result = {};
    recurser(string, "").forEach(function(current){
        result[current] = true;
    });
    console.log(Object.keys(result));
    return Object.keys(result);
}

anagramIt('abc')
