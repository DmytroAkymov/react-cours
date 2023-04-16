import '../App.css';

const SortDropdown = ({ sortKey, setSortKey }) => {
  const handleSortChange = (event) => {
    setSortKey(event.target.value);
  };

  return (
    <select value={sortKey} onChange={handleSortChange}>
      <option value="">Sort by:</option>
      <option value="title">Title</option>
      <option value="id">ID</option>
      <option value="slug">Slug</option>
    </select>
  );
};

export default SortDropdown;
