import { MigrationInterface, QueryRunner } from "typeorm";

export class alterEntityCustomer1675979273890 implements MigrationInterface {
    name = 'alterEntityCustomer1675979273890'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customers" ALTER COLUMN "isAdm" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customers" ALTER COLUMN "isAdm" DROP DEFAULT`);
    }

}
