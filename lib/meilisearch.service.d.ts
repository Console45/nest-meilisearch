import { MeiliSearchOptions } from "./meilisearch.interface";
import { MeiliSearch } from "meilisearch";
import { OnModuleInit } from "@nestjs/common";
export declare class MeiliSearchService extends MeiliSearch implements OnModuleInit {
    private readonly options;
    onModuleInit(): Promise<void>;
    constructor(options: MeiliSearchOptions);
    private createIndicies;
}
