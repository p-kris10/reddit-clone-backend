import { Migration } from '@mikro-orm/migrations';

export class Migration20220316120548 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" drop column "title";');
  }

  async down(): Promise<void> {
    this.addSql('alter table "user" add column "title" text not null;');
  }

}
