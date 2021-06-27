export function useGetTodos() {
  const getTodos = async (search?: string) => {
    const url = new URL('/api/todo/get', window.location.origin);

    if (search) {
      const searchParams = new URLSearchParams({ search });
      url.search = searchParams.toString();
    }

    const request = await fetch(url.toString(), {
      headers: { 'Content-Type': 'application/json' },
      method: 'GET',
    });
    return request.json();
  };

  return { getTodos };
}
