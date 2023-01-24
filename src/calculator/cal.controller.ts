import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "src/user/user.service";
import { CalculatorService } from "./cal.service";

@Controller('/calculate')
export class CalculatorController {
    constructor(private calculatorService: CalculatorService,private userService: UserService){}

    @Get()
    getHello(): string {
        return 'Hello!';
    }

    @Post('/add')
    add(@Body() body:{a:number,b: number}):number {
        return this.calculatorService.add(body.a, body.b);
    }   

    @Post('/subtract')
    subtract(@Body() body: {a: number, b: number}): number {
        return this.calculatorService.subtract(body.a, body.b);
    }

    @Post('/multiply')
    multiply(@Body() body: {a: number, b: number}): number {
        return this.calculatorService.multiply(body.a, body.b);
    }

    @Post('/summ')
    summ(@Body() body:number[]):any {
        //return "heyy";
        return this.userService.getscore(body);
    }

}