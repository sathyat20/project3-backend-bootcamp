'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable("questions_category", {
       id: {
         type: Sequelize.INTEGER,
         autoIncrement: true,
         allowNull: false,
         primaryKey: true,
       },
       category_name: {
         type: Sequelize.STRING,
         allowNull: false,
       },
       created_at: {
         allowNull: false,
         type: Sequelize.DATE,
       },
       updated_at: {
         allowNull: false,
         type: Sequelize.DATE,
       },
     });
  },

  async down (queryInterface) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("questions_category")
  }
};
