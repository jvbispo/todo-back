import {MigrationInterface, QueryRunner, TableForeignKey,Table} from "typeorm";

export class Create1590532747463 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.createTable(new Table({

      name: 'tasks',
      columns:[
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: "uuid",
          default: 'uuid_generate_v4()'
        },
        {
          name: 'user_id',
          type: 'uuid'
        },
        {
          name: 'title',
        type: 'varchar'
        },
        {
          name: 'body',
          type:'varchar'
        },{
          name: 'category_id',
          type: 'uuid',
        },{
          name: 'date_start',
          type: 'timestamp',
          isNullable: true,
        },{
          name: 'date_end',
          type: 'timestamp',
          isNullable: true,
        }
      ],
      foreignKeys: [
        {
          name: 'categoryKey',
          columnNames: ['category_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'categories',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        },
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tasks')
  }



}
