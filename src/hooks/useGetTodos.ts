export function useGetTodos() {
  const getTodos = async () => {
    const request = await fetch('/api/todo/get', {
      headers: { 'Content-Type': 'application/json' },
      method: 'GET',
    });
    return request.json();
  };

  return { getTodos };
}
