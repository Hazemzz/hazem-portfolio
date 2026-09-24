import { PartialDate } from '../models/portfolio.models';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

interface ParsedDate {
  year: number;
  month?: number;
}

function parse(value: PartialDate): ParsedDate {
  const [year, month] = value.split('-').map(Number);
  return month ? { year, month } : { year };
}

/** '2020-09' -> 'Sep 2020', '2017' -> '2017'. */
export function formatPartialDate(value: PartialDate): string {
  const { year, month } = parse(value);
  return month ? `${MONTHS[month - 1]} ${year}` : `${year}`;
}

export function formatDateRange(start: PartialDate, end: PartialDate | null): string {
  return `${formatPartialDate(start)} – ${end ? formatPartialDate(end) : 'Present'}`;
}

/**
 * Inclusive duration (LinkedIn style), e.g. '1 yr 3 mos'.
 * Returns an empty string when either side only has a year.
 */
export function formatDuration(start: PartialDate, end: PartialDate | null, now = new Date()): string {
  const from = parse(start);
  const to = end ? parse(end) : { year: now.getFullYear(), month: now.getMonth() + 1 };
  if (!from.month || !to.month) {
    return '';
  }

  const totalMonths = (to.year - from.year) * 12 + (to.month - from.month) + 1;
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts: string[] = [];
  if (years) parts.push(`${years} yr${years > 1 ? 's' : ''}`);
  if (months) parts.push(`${months} mo${months > 1 ? 's' : ''}`);
  return parts.join(' ');
}
