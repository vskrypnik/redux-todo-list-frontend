export const withError = (validator, error) => (
  (value) => validator(value) ? undefined : error
)
