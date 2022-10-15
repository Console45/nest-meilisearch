import { DynamicModule, Global, Module } from "@nestjs/common";
import { Config } from "meilisearch";
import { MeiliSearchService } from "./meilisearch.service";

@Module({})
@Global()
export class MeiliSearchModule {
  static forRoot(config: Config): DynamicModule {
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
