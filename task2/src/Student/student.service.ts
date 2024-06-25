import { Injectable } from "@nestjs/common";

@Injectable()
export class StudentService{
    getStudent(): Object{
        return {messsage: "Student"}
    }

    getStudentById(id: number): Object{
        return {messsage: "Student id: " +id}
    }

    getStudentByNameAndId(name: string, id: number): Object{
        return {messsage: "Student Name:"+name+"    Student Id:"+id}
    }
    getStudentByObject(name: object): Object{
        return {messsage: "Student Name:"+name}
    }
    updateStudent(myobj: object, id:number): Object{
        return {messsage: "update Student:"+id, body: myobj}
    }
    patchStudent(myobj: object, id:number): Object{
        return {messsage: "Patch Student:"+id, body: myobj}
    }
    deleteStudent(myobj: object, id:number): Object{
        return {messsage: "Delete Student:"+id, body: myobj}
    }

    //
    addStudent(myobj:object): object{
        return myobj;
        }
        
       
}