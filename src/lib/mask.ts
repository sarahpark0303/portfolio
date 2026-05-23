/**
 * @lifestyle_creator → @l·····
 * 첫 글자만 노출, 나머지 마스킹
 */
export function maskHandle(handle: string): string {
  if (!handle.startsWith("@")) return handle;
  const name = handle.slice(1);
  if (name.length <= 1) return handle;
  return "@" + name[0] + "·····";
}
