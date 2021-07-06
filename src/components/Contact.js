export default function Contact(){
    return(
        
        <div className="container">
     <form >

    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>


    <label for="subject">Your Message</label>
    <textarea id="subject" name="subject" placeholder="Your Message" ></textarea>

    <input className='center' type="submit" value="Submit"/>

  </form>
</div>
        
    )
}