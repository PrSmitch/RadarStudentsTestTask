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
    // счётчик (костыли, которые можно наверняка убрать)
    let i = 1;
    // Цикл будет работать, пока новый массив меньше нужного кол-ва элементов
    do {
        // пробегаем по всему входному массиву, возвращаем элементы, пока счётчик не сравняется с нужным кол-вом элементов
        newArray = array.filter(el => {
            if (i <= numOfItems) {
                if (Math.round(Math.random())) {
                    i++;
                    return el;
                }
                else {

                }
            }
        })
    } while (newArray.length<numOfItems)
    return newArray;
}

export default getRandomElements;

// Нерешенные проблемы - 1. Начальные элементы чаще. 2. Если нужное кол-во элементов больше массива, то пизда  UPD: цикл бесконечным становится, похоже, если второй раз в него заходит