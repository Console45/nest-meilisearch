import { DynamicModule } from "@nestjs/common";
import { Config } from "meilisearch";
export declare class MeilSerchModule {
    static forRoot(config: Config): DynamicModule;
}
