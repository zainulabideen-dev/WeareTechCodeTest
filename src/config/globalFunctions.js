export function formatDate(newDate) {
  const months = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec',
  };
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const d = newDate;
  const year = d.getFullYear();
  const date = d.getDate();
  const monthIndex = d.getMonth();
  const monthName = months[d.getMonth()];
  const dayName = days[d.getDay()]; // Thu
  const formatted = `${dayName}, ${monthName} ${date} `;
  return formatted.toString();
}
