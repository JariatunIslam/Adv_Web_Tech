import {IsNotEmpty, Matches, MaxLength, MinLength } from "class-validator";
import internal from "stream";

export class StudentDTO{

    
    @Matches(/^[A-Za-z]+$/,{message: "Please enter a valid name"})
    name:string;

    @IsNotEmpty({ message: 'Email is required'})
    @Matches(/^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+xyz$/, { message: 'Email must be a valid .xyz domain.'})
    email:string;

    @MaxLength(17)
    @MinLength(17)
    NID:number;

}

export class StudentUpdateDTO{
    
    @Matches(/^[A-Za-z]+$/,{message: "Please enter a valid name"})
    name:string;

    @IsNotEmpty({ message: 'Email is required'})
    @Matches(/^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+xyz$/, { message: 'Email must be a valid .xyz domain.'})
    email:string;

    @MaxLength(17)
    @MinLength(17)
    NID:number;
}