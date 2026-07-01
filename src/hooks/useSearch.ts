import { useStore } from '../context/StoreContext';

export function useSearch() {
  const { searchTerm, setSearchTerm } = useStore();
  return { searchTerm, setSearchTerm };
}
