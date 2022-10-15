import { MeiliSearchOptions } from "./meilisearch.interface";
import { MeiliSearch } from "meilisearch";
import { Injectable, OnModuleInit } from "@nestjs/common";

@Injectable()
export class MeiliSearchService extends MeiliSearch implements OnModuleInit {
  async onModuleInit() {
    await this.createIndicies();
  }

  constructor(private readonly options: MeiliSearchOptions) {
    super(options);
  }

  private async createIndicies() {
    for (let index of this.options.indices) {
      await this.createIndex(index.uid, index.options);
    }
  }
}
