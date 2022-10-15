import { MeiliSearchOptions } from "./meilisearch.interface";
import { DynamicModule, Global, Module } from "@nestjs/common";
import { MeiliSearchService } from "./meilisearch.service";

@Module({})
@Global()
export class MeiliSearchModule {
  static forRoot(config: MeiliSearchOptions): DynamicModule {
    const providers = [
      {
        provide: MeiliSearchService,
        useValue: new MeiliSearchService(config),
      },
    ];

    return {
      providers: providers,
      exports: providers,
      module: MeiliSearchModule,
    };
  }
}
