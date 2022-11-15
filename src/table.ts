
class Table {

    private data: any [];


    constructor (data: any []) {
        this.data = data;
        }

    print(): void {
        for (let j=0; j<this.data [0].length; j++) {
            let max = 0;
            for (let i=0; i<this.data.length; i++) {
               if (this.data[i][j].length > max) {
                   max = this.data [i][j].length;
               }
            }
            for (let i=0; i<this.data.length; i++) {
               while (this.data[i][j].length < max) {
                   this.data [i][j] = ' ' +this.data [i][j];
               }
            }
           }
           let numberForBorder = 0;
           for (let i=0;i<this.data [0].length;i++) {
           numberForBorder += this.data [0][i].length+2; 
           }
           let borderUp = '';
           for (let i=0; i<numberForBorder+1;i++) {
               borderUp += '-'
           }
           console.log(borderUp);
           for (let i=0;i<this.data.length; i++) {
               let log = '';
               for (let j=0;j<this.data [i].length; j++) {
                   log += '| ' + this.data [i][j];
               }
               console.log(log+'|');
           }
           console.log(borderUp);
    }

    addHuman (human: any): any [] {
        this.data.push (human);
        return this.data;
    }
}

export default Table;       