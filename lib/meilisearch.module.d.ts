import { MeiliSearchOptions } from "./meilisearch.interface";
import { DynamicModule } from "@nestjs/common";
export declare class MeiliSearchModule {
    static forRoot(config: MeiliSearchOptions): DynamicModule;
}
