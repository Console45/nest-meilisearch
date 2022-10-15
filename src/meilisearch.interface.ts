import { Config, IndexOptions } from "meilisearch";

export interface MeiliSearchOptions extends Config {
  indices?: {
    uid: string;
    options: IndexOptions;
  }[];
}
