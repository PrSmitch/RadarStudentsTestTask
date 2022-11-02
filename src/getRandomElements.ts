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
    // переменная для проверки
    let valueNow: string = '';
    // цикл для заполнения нового массива
    while (newArray.length < numOfItems) {
        // рандомим элемент массива и кидаем его в переменную
        valueNow = array[randomValue(array.length)];
        // цикл для проверки, чтобы этого элемента уже не было в итоговом массиве
        for (let i = 0; i < newArray.length; i++) {
            // если узнали, что он есть, то просто кидаем на место того же элемента, а переменной присваиваем '1'. Чтобы выйти из цикла, сразу приравниваем i к длине массива
            if (valueNow === newArray[i]) {
                newArray[i] = valueNow;
                valueNow = '';
                i = newArray.length;
            }
        }
        // если перменная true, то забираем её в итоговый массив 
        if (valueNow) {
            newArray.push(valueNow);
        }
    }
    return newArray;
}

export default getRandomElements;
