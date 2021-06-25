
export function Additem()
{
  const value = "ankush is great!!!"
  return(
    <div>
      <form>
      <label for = "text-form">Type something: </label>
      <input type = "text" value = {value} id = "text-form" />
      </form>
    </div>
  )
}