export const paginate = (
  length: number,
  elementsPerPage: number,
  requestPage: number
) => {
  let start = 0,
    end = 0;
  if (length) {
    const maxPages = Math.ceil(length / elementsPerPage);
    const page =
      !requestPage || requestPage <= 0
        ? 1
        : requestPage > maxPages
        ? maxPages
        : requestPage;
    start = (page - 1) * elementsPerPage;
    end = page * elementsPerPage;
  }
  return { start, end };
};
