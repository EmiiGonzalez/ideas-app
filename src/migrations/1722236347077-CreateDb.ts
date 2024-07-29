import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDb1722236347077 implements MigrationInterface {
    name = 'CreateDb1722236347077'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tags" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "nombre" character varying NOT NULL, "color" character varying NOT NULL, CONSTRAINT "UQ_c2a1a40029d7949061bff875f77" UNIQUE ("nombre"), CONSTRAINT "PK_e7dc17249a1148a1970748eda99" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ideas" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "titulo" character varying(100) NOT NULL, "descripcion" character varying NOT NULL, "is_deleted" boolean NOT NULL DEFAULT false, "user_id" integer, CONSTRAINT "UQ_0e1dd6a97bd59d81f0f649a077e" UNIQUE ("titulo"), CONSTRAINT "PK_6ab43f1e9b1cef0d8f3e56ce3a3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."users_rol_enum" AS ENUM('admin', 'user')`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "nombre" character varying(50) NOT NULL, "email" character varying(50) NOT NULL, "password" character varying NOT NULL, "rol" "public"."users_rol_enum" NOT NULL DEFAULT 'user', CONSTRAINT "UQ_f1ff57c5483511cf4da1235eb48" UNIQUE ("email", "nombre"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "ideas" ADD CONSTRAINT "FK_a193dbfa2c4ff1d687c10602982" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ideas" DROP CONSTRAINT "FK_a193dbfa2c4ff1d687c10602982"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_rol_enum"`);
        await queryRunner.query(`DROP TABLE "ideas"`);
        await queryRunner.query(`DROP TABLE "tags"`);
    }

}
