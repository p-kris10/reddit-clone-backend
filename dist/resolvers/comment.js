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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentResolver = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Comment_1 = require("../entities/Comment");
const isAuth_1 = require("../middleware/isAuth");
let CommentResolver = class CommentResolver {
    creator(comment, { userLoader }) {
        console.log(comment.creatorId);
        return userLoader.load(comment.creatorId);
    }
    async comment(postId, text, { req }) {
        return Comment_1.Comment.create({
            text,
            postId,
            creatorId: req.session.userId,
        }).save();
    }
    async commentUpdate(comId, text, { req }) {
        const result = await (0, typeorm_1.getConnection)()
            .createQueryBuilder()
            .update(Comment_1.Comment)
            .set({ text })
            .where('id = :id and "creatorId" = :userId', {
            id: comId,
            userId: req.session.userId,
        })
            .returning("*")
            .execute();
        return result.raw[0];
    }
    async getComments(postId, { req }) {
        const comments = await Comment_1.Comment.find({ where: { postId } });
        return comments;
    }
};
__decorate([
    (0, type_graphql_1.FieldResolver)(() => String),
    __param(0, (0, type_graphql_1.Root)()),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Comment_1.Comment, Object]),
    __metadata("design:returntype", void 0)
], CommentResolver.prototype, "creator", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Comment_1.Comment),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("postId", () => type_graphql_1.Int)),
    __param(1, (0, type_graphql_1.Arg)("text", () => String)),
    __param(2, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Object]),
    __metadata("design:returntype", Promise)
], CommentResolver.prototype, "comment", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Comment_1.Comment),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Arg)("comId", () => type_graphql_1.Int)),
    __param(1, (0, type_graphql_1.Arg)("text", () => String)),
    __param(2, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Object]),
    __metadata("design:returntype", Promise)
], CommentResolver.prototype, "commentUpdate", null);
__decorate([
    (0, type_graphql_1.Query)(() => [Comment_1.Comment], { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("postId", () => type_graphql_1.Int)),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CommentResolver.prototype, "getComments", null);
CommentResolver = __decorate([
    (0, type_graphql_1.Resolver)(Comment_1.Comment)
], CommentResolver);
exports.CommentResolver = CommentResolver;
//# sourceMappingURL=comment.js.map