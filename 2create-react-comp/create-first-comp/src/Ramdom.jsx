function Random(){
  let Number = Math.random() * 10000;
  return(
    <h1>Random number:{Math.round(Number)}</h1>
  )

}
export default Random;