
class Table {

    private data: any [];


    constructor (data: any []) {
        this.data = data;
        }

    print(): void {
        // цикл для прохождения по всем элементам (data [0], подразумевается, что нам даётся двумерный массив, в котором длина каждого внутреннего массива одинакова, поэтому не важно, какой индекс 0 или 1 или 2)
        for (let j=0; j<this.data [0].length; j++) {
            let max = 0;
             // следующий цикл нужен для определения максимального количества символов в каждом столбце
            for (let i=0; i<this.data.length; i++) {
               if (this.data[i][j].length > max) {
                   max = this.data [i][j].length;
               }
            }
            // в этом цикле, зная максимальное количество символов в столбце, мы приводим каждый элемент столбца к максимальному кол-ву символов, чтобы всё было ровно друг под другом
            for (let i=0; i<this.data.length; i++) {
               while (this.data[i][j].length < max) {
                   this.data [i][j] = ' ' +this.data [i][j];
               }
            }
           }
           // переменная и цикл для опредления нужного кол-во символов для разделительных строх
           let numberForBorder = 0;
           for (let i=0;i<this.data [0].length;i++) {
           numberForBorder += this.data [0][i].length+2; 
           }
           // заполняем переменную тире, создавая разделительную полосу
           let borderUp = '';
           for (let i=0; i<numberForBorder+1;i++) {
               borderUp += '-'
           }
           // начальная полоса
           console.log(borderUp);
           // цикл, который выводит красиво наши элементы, после каждой содержательной строки вывожится разделительная полоса из тире
           for (let i=0;i<this.data.length; i++) {
               let log = '';
               for (let j=0;j<this.data [i].length; j++) {
                   log += '| ' + this.data [i][j];
               }
               console.log(log+'|');
               console.log(borderUp);
           }
        
    }
// метод для добавления новой строки
    addLine (line: any []): any [] {
        this.data.push (line);
        return this.data;
    }

//геттер :)
    get some() {
        return this.data;
    }

}

export default Table;       