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


const array2 = new Table ( [['tag','total','passed','totalTime'],  ['Record', '7', '7', '5s 456ms'], ['Backup', '2', '2', '8s 444ms']] );

array2.print ();

array2.addLine (['Location', '8','8', '2s 55ms']);

array2.print ();

array2.some;