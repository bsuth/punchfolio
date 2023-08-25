module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  proseWrap: 'always',
  importOrder: ['^@.*$', '^[a-zA-Z].*$', '^\\..*$'],
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
};
