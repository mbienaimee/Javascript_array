var student= {
    name:'reine',
    age:20,
    gender:'female',
    id :12,
    newId:function(number){
        this.id = number;
        return number;

    }
   
}
student.newId(20);
Object.assign(student,{
    gender : 'male',
    email :'bienaimee@gmail.com'
})

console.log(student)
