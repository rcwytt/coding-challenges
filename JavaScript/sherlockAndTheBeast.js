process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////
function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        
        var arr3s = [];
        var arr5s = [];
        
        // gather counts of 3s and 5s that could be used to generate a decent number of size n
        // ordering the counts from largest to smallest to employ a greedy algorithm is determining largest permutation
        // do not need to dip below 3 since there are no decent numbers of size < 3
        for (i=n; i >= 3; i--) {
            if (i % 3 == 0) {
                arr5s.push(i);
            }
            else if (i % 5 == 0) {
                arr3s.push(i);
            }
        }
        
        // add zeros to the end of the counts to avoid having to code special cases
        arr5s.push(0);
        arr3s.push(0);
        
        // greedy algorithm: loop through the counts of 5s and then 3s to see if
        // we can piece together a number of size n
        const str3 = "3";
        const str5 = "5";
        var i=0;
        var j=0;
        var nbr5s = 0;
        var nbr3s = 0;
        var isDecentNbr = false;
        var decentNbr = -1;
        
        while (i < arr5s.length && !isDecentNbr) {
            
            nbr5s = arr5s[i];
            j = 0;
            
            while (j < arr3s.length && !isDecentNbr) {
                
                nbr3s = arr3s[j];
                isDecentNbr = (n - nbr5s === nbr3s);
                j++;
            }
            i++;
        }
        
        //  build the decent number with the respective counts of 5s and 3s
        // starting with 5s in the most significant digits to generate the largest possible number
        if (isDecentNbr) {
          decentNbr = str5.repeat(nbr5s) + str3.repeat(nbr3s);
        }
        
        console.log(decentNbr);
    }

}