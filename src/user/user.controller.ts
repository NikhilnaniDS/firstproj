import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UserService } from "./user.service";


@Controller('user')

export class UserController {
    constructor(private readonly userService: UserService){}

    @Get('/all')
    getusers(): any {
        return this.userService.getUsers();
    }   

    @Post('add')
    addUser(@Body() body:{id:number, name:string, email:string,score:number}): string {
        return this.userService.addUser(body);
    }

    @Get('/:id')
    getUser(@Param('id') id: number): any {
        return this.userService.getUser(id);
    }



}