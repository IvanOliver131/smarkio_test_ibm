import { MigrationInterface, QueryRunner, UpdateQueryBuilder, Table } from "typeorm";

export class CreateCommentsTable1623859786506 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
            name: 'comments',
            columns: [
                {
                    name: 'id',
                    type: 'serial',
                    isPrimary: true,
                },
                {
                    name: 'descricao',
                    type: 'varchar',
                    isUnique: true,
                }
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('comments');
    }

}
