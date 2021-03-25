import { User } from "../model/user";

export function removeDuplicates(data: any[]) {
  const seen = new Set();

  const filteredData = data.filter(element => {
    const duplicate = seen.has(element.id);
    seen.add(element.id);
    return !duplicate
  })
  return filteredData
}