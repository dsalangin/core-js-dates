const { log } = console;

function getCountWeekendsInMonth(month, year) {
  const firstDay = new Date(year, month - 1, 1).getDay();
  const lastDay = new Date(year, month, 0);
  const days = lastDay.getDate();
  const weeks = Math.floor(days / 7);
  const restDays = days % 7;

  log(firstDay);
  log(restDays);

  if (firstDay === 0) {
    return weeks * 2 + 1;
  }

  if (firstDay - 1 + restDays === 6) {
    return weeks * 2 + 1;
  }

  if (firstDay - 1 + restDays > 6) {
    return weeks * 2 + 2;
  }

  return weeks * 2;
}

log(getCountWeekendsInMonth(5, 2024));
