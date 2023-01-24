import { Injectable , NotFoundException,forwardRef,Inject} from "@nestjs/common";
import { CalculatorService } from "src/calculator/cal.service";
//import { CalculatorService } from "src/calculator/cal.service";

@Injectable()
export class UserService {
    constructor(@Inject(forwardRef(()=>CalculatorService)) private calService: CalculatorService){}
    users = [
        {
            id: 1,
            name: "Nikhil sai",
            email: "nikhil@gmail.com",
            score:10
        },
        {
            id: 2,
            name: "Rakesh",
            email: "rakesh@gmail.com",
            score:20
        },
        {
            id: 3,
            name: "Ganesh",
            email: "ganesh@gmail.com",
            score:30
        },
        {
            id: 4,
            name: "Kirankumar",
            email: "kiran@gmail.com",
            score:40
        }
    ];

    getUsers() {
        return this.users;
    }

    getUser(id: number) {
        const us=this.users.find(user => user.id.toString()===id.toString());
        if (!us){
            throw new NotFoundException("User not found");
        }
        return {...us}
    } 

    getscore(arr: number[]) :number{
        let summ=0;
        for (let i = 0; i < arr.length; i++) {
            let us=this.users.find(user => user.id.toString()===arr[i].toString());
            summ+=us.score;
        }
        return summ;
}

    addUser(user:{id:number, name:string, email:string,score:number}) {
        this.users.push(user);
        return user.name + " has been added";}

    }

