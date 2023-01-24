import { Module , forwardRef} from "@nestjs/common";
import { calcModule } from "src/calculator/cal.module";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
    imports: [forwardRef(()=>calcModule)],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]
})

export class UserModule{}