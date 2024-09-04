function ListBy() {
  return (
    <>
      <div className="w-full">
        <select
          name="listby"
          id="listby"
          className="w-full border-2 border-black rounded-md"
        >
          <option value="#">Most Recent</option>
          <option value="#">Most Popular</option>
          <option value="#">Oldest</option>
        </select>
      </div>
    </>
  );
}

export default ListBy;
