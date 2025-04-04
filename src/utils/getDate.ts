export function getDate(dateString: string) {
  const [datePart, timePart] = dateString.split(', ')
  const startTime = timePart.split('-')[0]
  const [day, month, year] = datePart.split('.').map(Number)
  const [hours, minutes] = startTime.split(':').map(Number)

  return new Date(year, month - 1, day, hours, minutes)
}
