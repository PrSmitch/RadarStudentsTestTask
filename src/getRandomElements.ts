/**
 * Функция возвращает numOfItems случайных, не повторяющихся
 * элементов из массива array.
 * 
 * Примечание: если array.length < numOfItems возвращаем 
 * array.length случайных элементов.
 * 
 * @param array - входной массив
 * @param numOfItems - кол-во элементов которое вернет ф-я
 * @returns массив случайных неповторяющихся элементов
 */
function getRandomElements(array: string[], numOfItems: number): string[] {
    // проверяем, чтобы нужное кол-во элементов не былло больше массива
    if (array.length < numOfItems) {
        numOfItems = array.length;
    }
    // новый массив, который вернёт функция
    let newArray: string[] = [];
    // функция для рандом элемента
    function randomValue(max: number): number {
        return Math.floor(Math.random() * max);
    }
    // цикл для заполнения нового массива
    while (newArray.length < numOfItems) {
        newArray.push(array[randomValue(array.length)])
    }
    return newArray;
}

export default getRandomElements;

// Нерешенные проблемы - 1. Начальные элементы чаще. 2. Если нужное кол-во элементов больше массива, то пизда  UPD: цикл бесконечным становится, похоже, если второй раз в него заходит