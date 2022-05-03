const getDatabaseUrl = (nodeEnv) => {
  return (
    {
      development: "postgres://postgres:postgres@localhost:5432/every-day-is-a-holiday_development",
      test: "postgres://postgres:postgres@localhost:5432/every-day-is-a-holiday_test",
      e2e: "postgres://postgres:postgres@localhost:5432/every-day-is-a-holiday_e2e",
    }[nodeEnv] || process.env.DATABASE_URL
  );
};

module.exports = getDatabaseUrl;
