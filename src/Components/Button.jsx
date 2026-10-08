
const Button = ({btnText, className}) => {
  return (
    <button className={`py-3 px-6 ${className}`}>{btnText}</button>
  )
}

export default Button