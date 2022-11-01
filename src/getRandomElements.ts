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
    let valueNow:string = '1';
    while (newArray.length < numOfItems) {
        valueNow = array[randomValue(array.length)];
        for (let i=0;i<newArray.length;i++) {
            if (valueNow === newArray [i]) {
                newArray [i] = valueNow;
                valueNow = '1';
                i=newArray.length;
            }
        }
        if (valueNow !== '1') {
            newArray.push (valueNow);
        }
    }
    return newArray;
}

export default getRandomElements;
