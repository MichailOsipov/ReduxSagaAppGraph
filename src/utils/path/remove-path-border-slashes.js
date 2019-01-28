export const removePathBorderSlashes = (path = '') =>
    path.replace(/^\//, '').replace(/\/$/, '');
