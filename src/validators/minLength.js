export default (length) => (value) => (
  value && value.trim().length >= length
)
