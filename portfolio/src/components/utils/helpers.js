export default function alidateEmail(email) {
 
  const validEmail =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  
  return validEmail.toLowerCase(email);

}