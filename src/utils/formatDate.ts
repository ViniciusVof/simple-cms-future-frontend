export default function formatDate(date: string) {
  return new Date(date).toLocaleDateString('pt-br');
}
