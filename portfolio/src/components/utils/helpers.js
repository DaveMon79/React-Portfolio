export default function ValidateEmail(email) {

  const validEmail =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  let result = email.match(validEmail);
  
  if (result) {
    return true
  }
  else 
  return false

}