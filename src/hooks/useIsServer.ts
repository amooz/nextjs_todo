export function useIsServer() {
  const isServer = typeof window === 'undefined';
  return { isServer, isClient: !isServer };
}
