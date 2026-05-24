function TodoItem2() {
  let todoItem = 'Go to university';
  let todoDate = '2024/06/30';
  return (
    <div className="container">
      <div className="row new-Row">
        <div className="col-6">{todoItem}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger new-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem2;
