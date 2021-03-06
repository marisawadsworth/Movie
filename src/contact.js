'use strict';

const e = React.createElement;

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      fullname: '',
      email: '',
      message: ''
      }
    };

  render() {
    return (
      <form>
        <h1>Contact Form</h1>
          <input class="contact-input"
            placeholder='Name'
            type='text'
            name='fullname'
            onChange={this.myChangeHandler}
          />
        <p></p>
          <input class="contact-input"
            placeholder='Email'
            type='text'
            name='email'
            onChange={this.myChangeHandler}
          />
        <p></p>
          <input class="contact-input-message"
            placeholder='Message'
            type='text'
            name='message'
            onChange={this.myChangeHandler}
          />
        <button class="contact-input-button">Submit</button>
      </form>
    );
  }
}

const domContainer = document.querySelector('#contact_container');
ReactDOM.render(e(MyForm), domContainer);