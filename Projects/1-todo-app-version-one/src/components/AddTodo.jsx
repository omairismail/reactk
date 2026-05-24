function AddTodo() {
  return (
    <div className="container text-center">
      <div className="row new-Row">
        <div className="col-6">
          <input type="text" placeholder="Enter todo"  className="form-control" />
        </div>
        <div className="col-4">
          <input type="date" className="form-control" />
        </div>
        <div className="col-1">
          <button type="button" className="btn btn-success new-btn" >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
