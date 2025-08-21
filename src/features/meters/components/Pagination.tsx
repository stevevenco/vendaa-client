const Pagination = () => {
  return (
    <div className="flex justify-between items-center mt-5 text-sm text-text-light">
      <span>Showing 1-10 of 157 meters</span>
      <div className="flex items-center">
        <a href="#" className="px-3 py-2 text-text-dark border border-border-color rounded-md mx-1 hover:bg-secondary-gray">&laquo; Prev</a>
        <a href="#" className="px-3 py-2 text-white bg-primary-blue border-primary-blue rounded-md mx-1">1</a>
        <a href="#" className="px-3 py-2 text-text-dark border border-border-color rounded-md mx-1 hover:bg-secondary-gray">2</a>
        <a href="#" className="px-3 py-2 text-text-dark border border-border-color rounded-md mx-1 hover:bg-secondary-gray">3</a>
        <span className="mx-1">...</span>
        <a href="#" className="px-3 py-2 text-text-dark border border-border-color rounded-md mx-1 hover:bg-secondary-gray">16</a>
        <a href="#" className="px-3 py-2 text-text-dark border border-border-color rounded-md mx-1 hover:bg-secondary-gray">Next &raquo;</a>
      </div>
    </div>
  );
};

export default Pagination;
