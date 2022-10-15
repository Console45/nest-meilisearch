import { Config, MeiliSearch } from "meilisearch";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MeiliSearchService extends MeiliSearch {
  constructor(config: Config) {
    super(config);
  }
}
