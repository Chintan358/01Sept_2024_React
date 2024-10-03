
const id = 10;

class Student {
    
    name="Mohini"
    email="Mohini@gmial.com"

    constructor(a,b){
        //console.log("constructor calling.."+name);   
        this.name=a
        this.email=b
    }

    display()
    {
        console.log(this.name+" "+this.email);
        
    }
}

st = new Student("Moksh","moksh@gmial.com")
st.display()
st1 = new Student("Mohini","mohini@gmial.com")
st1.display()





