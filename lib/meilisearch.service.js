"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeiliSearchService = void 0;
const meilisearch_1 = require("meilisearch");
const common_1 = require("@nestjs/common");
let MeiliSearchService = class MeiliSearchService extends meilisearch_1.MeiliSearch {
    constructor(options) {
        super(options);
        this.options = options;
    }
    onModuleInit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.createIndicies();
        });
    }
    createIndicies() {
        return __awaiter(this, void 0, void 0, function* () {
            for (let index of this.options.indices) {
                yield this.createIndex(index.uid, index.options);
            }
        });
    }
};
MeiliSearchService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Object])
], MeiliSearchService);
exports.MeiliSearchService = MeiliSearchService;
//# sourceMappingURL=meilisearch.service.js.map