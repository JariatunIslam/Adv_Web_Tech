import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Query, Res, UploadedFile, UseInterceptors, UsePipes, ValidationPipe,Patch,Delete} from "@nestjs/common";

import { StudentService } from "./student.service"
import { StudentDTO, StudentUpdateDTO} from "./student.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { MulterError, diskStorage } from "multer";


@Controller('Student')
export class StudentController{
constructor(private readonly StudentService: StudentService){}

   @Get()
   getStudent(): object{
    return this.StudentService.getStudent();
}

    @Get('get/:id')
    getStudentById( @Param('id') id: number): object{
        return this.StudentService.getStudentById(id);
    }


    @Get('getbynameandid')
    getStudentByNameAndId( @Query('name') name: string, @Query('id') id: number): object{
        return this.StudentService.getStudentByNameAndId(name,id);
    }

    @Get('getStudent')
    getStudentByObject(@Body() myobj:object): object{
        console.log(myobj);
        return this.StudentService.getStudentByObject(myobj);
    }

 
    @Patch('patchStudent/:id')
    patchStudent(@Body()myobj:object,@Param('id') id:number): object{
        return this.StudentService.patchStudent(myobj,id);

    }
    @Delete('patchStudent/:id')
    deleteStudent(@Body()myobj:object,@Param('id') id:number): object{
        return this.StudentService.deleteStudent(myobj,id);

    }

    //

  @Post('addStudent')
  @UsePipes(new ValidationPipe())
  
  addStudent(@Body() myobj:StudentDTO): object {
    console.log(myobj);
    return this.StudentService.addStudent(myobj);
  }


  @Put('updateStudent/:id')
  @UsePipes(new ValidationPipe())
  updateStudent(@Body() myobj:StudentUpdateDTO, @Param('id') id:number): object {
    return this.StudentService.updateStudent(myobj,id)
  }


@Post('addimage')
@UseInterceptors(FileInterceptor('myfile',
  { fileFilter: (req, file, cb) => {
    if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/))
    cb(null, true);
    else {
     cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
     }
    },
    limits: { fileSize: 20000 },
    storage:diskStorage({
    destination: './uploads',
    filename: function (req, file, cb) {
     cb(null,Date.now()+file.originalname)
    },
    })
    }
)
)
addImage(@Body() myobj:object,@UploadedFile() file: Express.Multer.File) {
console.log(file);
console.log(myobj);
return myobj;
}


@Get('/getimage/:name')
getImage(@Param('name') filename:string, @Res() res) {

 res.sendFile(filename,{ root: './uploads' })
 }




    
}

