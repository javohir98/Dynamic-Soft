export function getPaginationIndex(activePage: number, limit: number = 10, index: number) {
  if (activePage === 1) {
    return index + 1;
  } else {
    return (activePage - 1) * limit + index + 1;
  }
}

export function getPaginationCount(count: number, limit: number) {
  if (count % limit === 0) {
    return count / limit;
  } else if (count % limit !== 0) {
    return count / limit + 1;
  } else {
    return 0;
  }
}
