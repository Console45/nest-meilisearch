# NEST-MEILISEARCH

Nest-meilisearch is a simple nestjs wrapper around the [meilisearch-js](https://github.com/meilisearch/meilisearch-js) library.

## Installation

This plugin requires you to install the `meilisearch` package to work

Installation with npm

```bash
 npm i nest-meilisearch meilisearch
```

Installation with yarn

```bash
 yarn add nest-meilisearch meilisearch
```

## Getting Started

Start by importing the `MeiliSearchModule` global module in your `AppModule`. Then configure your meilisearch client using the `forRoot`.

```typescript
import { MeiliSearchModule } from "nest-meilisearch";

@Module({
  imports: [
    MeiliSearchModule.forRoot({
      host: "http://127.0.0.1:7700", // your meilisearch client server url
      apiKey: "MASTER_KEY", // your server api key
    }),
  ],
})
export class AppModule {}
```

You can also set up basic **indices** / **indexes** when configuring your meilisearch client

```typescript
import { MeiliSearchModule } from "nest-meilisearch";

@Module({
  imports: [
    MeiliSearchModule.forRoot({
      host: "http://127.0.0.1:7700", // your meilisearch client server url
      apiKey: "MASTER_KEY", // your server api key
      indices: [{ uid: "movies" }],

      // or  pass option for your indices like this

      indices: [{ uid: uid: "movies", options: { primaryKey: 'id' } }],
    }),
  ],
})
export class AppModule {}
```

Your indices would be created once your app is loaded and you can start using them right away.

### Usage

Simply Inject the ``MeiliSearchService`` into your app and start using it. It extends all the methods provided by the [meilisearch-js](https://github.com/meilisearch/meilisearch-js) library.

```typescript
import { Inject, Injectable } from "@nestjs/common";
import { MeiliSearch } from "meilisearch";
import { MeiliSearchService } from "nest-meilisearch";

@Injectable()
export class AppService {
  constructor(
    @Inject(MeiliSearchService) private readonly meiliSearch: MeiliSearch
  ) {}

  async searchMovies(query: string) {
    const moviesIndex = this.meiliSearch.index("movies");
    return await moviesIndex.search(query);
  }
}
```

### Learn more

The following documentation resources may interest you

- To use `meilisearch-js`, refer to the [documentation](https://github.com/meilisearch/meilisearch-js)
- To manipulate documents, see the [Api referece](https://docs.meilisearch.com/reference/api/documents.html) or [documents](https://docs.meilisearch.com/learn/core_concepts/documents.html)
- To learn more about search, see [Api referece](https://docs.meilisearch.com/reference/api/documents.html) or the guide on [search parameters](https://docs.meilisearch.com/reference/features/search_parameters.html)
- To manage indexes, see [Api referece](https://docs.meilisearch.com/reference/api/documents.html) or [indexes](https://docs.meilisearch.com/learn/core_concepts/indexes.html)
- To configure the index settings, see [Api referece](https://docs.meilisearch.com/reference/api/documents.html) or follow the guide on [settings parameters](https://docs.meilisearch.com/reference/features/settings.html)
