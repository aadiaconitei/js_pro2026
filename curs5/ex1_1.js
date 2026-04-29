// console.log(process.argv);

var sum = 0;
for (i = 2; i < process.argv.length; i++) {
    sum += Number(process.argv[i]);
    console.log(sum);
}


console.log(`Suma dintre ${process.argv[2]} si ${process.argv[3]} este ${sum}`);

// node ex1_1.js 24 46

// The process.argv property returns an array containing the command-line arguments 
// process.argv[0] - path/to/node.exe
// process.argv[1] - path/to/js/file 