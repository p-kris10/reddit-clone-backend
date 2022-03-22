"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20220316120548 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20220316120548 extends migrations_1.Migration {
    async up() {
        this.addSql('alter table "user" drop column "title";');
    }
    async down() {
        this.addSql('alter table "user" add column "title" text not null;');
    }
}
exports.Migration20220316120548 = Migration20220316120548;
//# sourceMappingURL=Migration20220316120548.js.map