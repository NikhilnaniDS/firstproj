import { Injectable ,forwardRef, ForwardReference,Inject} from "@nestjs/common";
import { UserService } from "src/user/user.service";

@Injectable()
export class CalculatorService {
    constructor(@Inject(forwardRef(()=>UserService))  private useService: UserService) {}

    add(a:number, b:number): number{
        return a+b;
    }

    subtract(a:number, b:number): number{
        return a-b;
    }

    multiply(a:number, b:number): number{
        return a*b;
    }
}

function inject(arg0: ForwardReference<any>) {
    throw new Error("Function not implemented.");
}

