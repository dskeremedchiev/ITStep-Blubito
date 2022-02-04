interface Sized{
    length: number;
}


class DataBox<Type extends Sized>{
    content: Type;
    constructor(input: Type){
        this.content = input;
    }
    print(){
        console.log(this.content);
    }
}

const t1 = new DataBox('it works');
t1.print();
const t2 = new DataBox(123);
t2.print();
const t3 = new DataBox([1,2,3])
t3.print();