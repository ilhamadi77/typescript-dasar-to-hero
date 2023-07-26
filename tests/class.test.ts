describe("Class", function () {
  it("Should support in typescript", function () {
    class Customer {
      constructor() {
        console.info("create new object");
      }
    }

    class Order {
      constructor() {}
    }

    const customer: Customer = new Customer();
    const order: Order = new Order();

    console.info(customer);
  });

  it("Should support properties", function () {
    class Customer {
      readonly id: number;
      name: string;
      age?: number;

      constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
      }
    }

    const customer: Customer = new Customer(1, "irawan");
    //customer.id=2; erorr
    customer.age = 20;

    console.info({ message: "data customer", customer });
  });

  it("Should support properties default value", function () {
    class Customer {
      readonly id: number;
      name: string = "";
      age?: number;

      constructor(id: number) {
        this.id = id;
      }
    }

    const custumer: Customer = new Customer(1);
    custumer.name = "adi";
    custumer.age = 21;
    console.info(custumer);
  });

  it("Should support method ", function () {
    class Customer {
      readonly id: number;
      name: string;
      age?: number;

      constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
      }

      sayHello(name: string): void {
        console.info(`Hello ${name}, my Name is ${this.name}`);
      }
    }

    const customer: Customer = new Customer(1, "irawan");
    customer.sayHello("adi");
    console.info(customer);
  });

  it("Should support getter and setter", function () {

	class Category {
		_name?: string;
		
		get name(): string {
			if(this._name){
				return this._name;
			}else{
				return "Empty";
			}
		}

		set name(value: string) {
			if( value !== ""){
				this._name= value
			}else{
				this._name= "jangan kosong"
			}
		}
	}

	const category = new Category()
	console.info(category.name);

	category.name="food";
	console.info(category.name)

	category.name="";
	console.info(category.name)

  });
});
