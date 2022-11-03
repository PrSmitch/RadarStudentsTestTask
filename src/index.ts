import getRandomElements from "./getRandomElements";
import Table from "./table";
import getArrayOfUniqueValues from "./utils/getArrayOfUniqueValues";

/*
    Здесь вы можете как угодно эксперементировать с написанным вами кодом;

    ARRAY_OF_UNIQUE_VALUES - массив уникальных значений из N элементов,
    возможно, будет полезно :)

*/

//********************************************************************* 

const N = 10;
const ARRAY_OF_UNIQUE_VALUES = getArrayOfUniqueValues(N);

const result = getRandomElements(ARRAY_OF_UNIQUE_VALUES, 20);

console.log(result);


//********************************************************************* 


const faHer=[{pos: 1, nick: "PrSmitch", mmr: 1500},
         {pos: 2, nick: "RaeB", mmr: 1600},
         {pos: 3, nick: "Lean", mmr: 4000},
         {pos: 4, nick: "Shapochkin", mmr: 0},
         {pos: 5, nick: "Gleb", mmr: 90}
];
const table2 = new Table (faHer);
table2.print ();

console.table (faHer);