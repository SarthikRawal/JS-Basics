class RailayForm {
    constructor(givenName, trainNo) {
        this.name = givenName
        this.train = trainNo
    }
    submit() {
        console.log(`${this.name}: Your Form is submitted for train No ${this.train}`)
    }
    cancel() {
        console.log(`${this.name}: Your Form is cancelled for train No ${this.train}`)
    }

}

// Creating a form for sarthik 
let sarthikForm = new RailayForm("Sarthik", 77700)
// sarthikForm.fill("Sarthik", 77700)
console.log(sarthikForm);

// Creating a form for saurabh 
let saurabhForm1 = new RailayForm("Saurabh", 99882)
let saurabhForm2 = new RailayForm("Saurabh B", 92110)

console.log(saurabhForm1);
console.log(saurabhForm2);

// no need to initilize like this while using constructor
// saurabhForm1.fill("Saurabh", 99882)
// saurabhForm2.fill("Saurabh B", 92110)


sarthikForm.submit()
saurabhForm1.submit()
saurabhForm2.submit()
saurabhForm2.cancel()