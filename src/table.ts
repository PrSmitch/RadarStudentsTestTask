
class Table {

    private data: any [] 

    constructor (data: any []) {
        this.data = data;
        }

    print(): void {
        console.table (this);
    }


}



export default Table;   