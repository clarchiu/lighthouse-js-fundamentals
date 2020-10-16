function range(start, end, step) {
  let toReturn = []
  if (start !== undefined && end !== undefined && step !== undefined
    && start <= end && step > 0) {
    for (let i = start; i <= end; i += step) {
      toReturn.push(i);
    }
  }

  return toReturn;
}