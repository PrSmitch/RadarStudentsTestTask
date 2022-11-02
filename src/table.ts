class Table {

    private nameHero: string [];
    private role: string [];
    public meta: boolean [];

    constructor(nameHero: string [], role: string[], meta: boolean[]) {
        this.nameHero = nameHero;
        this.role = role;
        this.meta = meta;
    }

    print(): void {
        console.table (this)
    }

}



export default Table;   