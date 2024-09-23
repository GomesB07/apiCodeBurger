module.exports = {
  dialect: "postgres",
  url: "postgresql://codeburger_postgres:postgres@codeburger_postgres:5432/codeburger",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
