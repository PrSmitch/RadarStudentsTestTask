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

const table = new Table(['123','22'], ['22','66'],[true,false]);
table.print();