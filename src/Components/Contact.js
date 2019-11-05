import React, {Component} from 'react'
import Mailto from 'react-protected-mailto'
import '../App.css'

class Contact extends Component{
render(){
    return(
        <div>
            <p>
                <h5>Want to work together? Get in touch!</h5>
                Phone:<Mailto tel='720-749-0720' class="links"/><br/>
                Email: <Mailto
                    email='dlunoe@yahoo.com'
                    headers={
                        {subject: 'Question from your website'}
                    } class="links"/><br/>
                GitHub: <a
                 href="https://github.com/Dlunoe"
                 target="_blank" class="links">https://github.com/Dlunoe</a>
                 <br/>
                 LinkedIn:<a
                 href="https://www.linkedin.com/in/dustinlunoe/"
                 target="_blank" class="links">
                    https://www.linkedin.com/in/dustinlunoe/
                 </a>
            </p>
        </div>
    )
}
}

export default Contact;