"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MeilSerchModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeilSerchModule = void 0;
const common_1 = require("@nestjs/common");
const meilisearch_service_1 = require("./meilisearch.service");
let MeilSerchModule = MeilSerchModule_1 = class MeilSerchModule {
    static forRoot(config) {
        const providers = [
            {
                provide: meilisearch_service_1.MeiliSearchService,
                useValue: new meilisearch_service_1.MeiliSearchService(config),
            },
        ];
        return {
            providers: providers,
            exports: providers,
            module: MeilSerchModule_1,
        };
    }
};
MeilSerchModule = MeilSerchModule_1 = __decorate([
    (0, common_1.Module)({}),
    (0, common_1.Global)()
], MeilSerchModule);
exports.MeilSerchModule = MeilSerchModule;
//# sourceMappingURL=meilisearch.module.js.map