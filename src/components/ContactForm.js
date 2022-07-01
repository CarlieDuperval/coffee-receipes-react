import { useEffect, useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({})


    // const [firstName, setFirstName] = useState("");
    // const [lastName , setLastName] = useState("")
    const [terms, setTerms] = useState(false)
 


    const [validForm, setValidForm] = useState(false)
    //

    // const contactFormInfo = {
    //     firstName: firstName,
    //     lastName: lastName,
    //     terms: terms,
    //address
    //zip
    //sates
    //message
    // }


// Use effect : if the [] is empty means on mounting
// when firstName is changing the Use effect runs// UseEffect is running depending on the dependencies
useEffect(() => {   
    if(formData.firstName && formData.lastName && formData.terms){
    setValidForm(true)
}
}, [formData.firstName, formData.lastName, formData.terms])

 


    const sendData = (e) => {
        // this is a method called to do not refresh the page
        e.preventDefault()
      console.log("Button pressed")
      //console.log(firstName)
      console.log('ContactFormInfo ------->', formData)
    }

    fetch ('https://api.sampleapis.com/coffee/hot', { 
    method:"POST", 
    headers:{
        "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
    })
    .then( res , req => {})
    .then()
    .catch()
}

    const setFormObject = (event) => {
        setFormData(event.target.value)
        setFormData({...formData, [event.target.value]:event.target.value })
    }

    console.log(formData)
   
// everything inside the return expected jsx and html
    return (
      <>
        <form >
          <label>
            First Name:
            <input 
            type="text" 
            name="firstName"
             placeholder="First Name" 
            // onChange={(event)=> setFormData({...formData, firstName: event.target.value} ) } /> 
            onChange={setFormObject} />
          </label>
          <br />
          <label>
            Last Name:
            <input 
            type="text" 
            name="lastName"  
            onChange={setFormObject} />
          </label>
          <br />
          <label>
            Address:
            <input 
            type="text" name="address" 
            onChange={e => setFormData({...formData, address: e.target.value})} />
          </label>
          <br />
          <label>
            Zip:
            <input 
            type="text" 
            name="zip"  
            maxLength={5}
            onChange={(e) => setFormData({...formData, zip: e.target.value})} />
          </label>
          <br />
          <label>
            State:
            <select name="state" >
              <option value=""></option>
              <option value="fl">FL</option>
              <option value="tx">TX</option>
              <option value="ny">NY</option>
              <option value="ca">CA</option>
            </select>
          </label>
          <br />

        <label>
            Date:
          <input type="date" name="date" />
          </label>
            <br />

            <label>
            Terms and conditions
          <input type="checkbox"  onChange={event => setTerms(event.target.checked)}/>
          <br />
          </label> Message:
          <textarea name=" text-area" cols="30" rows="10" />
          <br />
          <labe>

          </labe>
          <button onClick={(e) => sendData(e)} disabled={!validForm}>
              Submit


              </button>
        </form>
      </>
    );
  



  // i don't understand this , Need to work on that later today