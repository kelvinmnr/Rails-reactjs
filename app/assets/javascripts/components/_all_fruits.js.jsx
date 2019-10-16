const AllFruits = (props) => {

  var fruits = props.fruits.map((fruit) => {
    return(
      <div key={fruit.id}>
       <Fruit fruit={fruit} handleDelete={props.handleDelete} handleUpdate={props.handleUpdate}/>
      </div>
    )
  })
   <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
  return(
      <div>
        {fruits}
      </div>
    )
}
