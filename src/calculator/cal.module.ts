import { Module, forwardRef } from "@nestjs/common";
import { UserModule } from "src/user/user.module";
import { CalculatorController } from "./cal.controller";
import { CalculatorService } from "./cal.service";


@Module({
    imports: [forwardRef(()=>UserModule)],
    controllers: [CalculatorController],
    providers: [CalculatorService],
    exports: [CalculatorService]
})
export class calcModule{}