//Store pages selectors
export class PageInTest {
  pageName: string | undefined;
  url: string | undefined;
  title: string | undefined;
}

export class MainPageInTest extends PageInTest {
  contactUsLink: string;
  loginPortalLink: string;

  constructor() {
    super();
    this.pageName = "Main Page";
    this.url = "/index.html";
    this.contactUsLink = "#contact-us";
    this.loginPortalLink = "a#login-portal";
  }
}

export class ContactPageInTest extends PageInTest {
  contactUsTitle: string;
  firstNameInput: string;
  lastNameInput: string;
  emailInput: string;
  commentsInput: string;
  resetButton: string;
  submitButton: string;

  constructor() {
    super();
    this.pageName = "Contact Us";
    this.url = "/Contact-Us/contactus.html";
    this.contactUsTitle = "h2[name='contactme']";
    this.firstNameInput = "form#contact_form > input[name='first_name']";
    this.lastNameInput = "form#contact_form > input[name='last_name']";
    this.emailInput = "form#contact_form > input[name='email']";
    this.commentsInput = "form#contact_form > textarea[name='message']";
    this.resetButton = "[type='reset']";
    this.submitButton = "[type='submit']";
  }
}

export class ContactUsThankYouPageInTest extends PageInTest {
  successTitle: string;
  successTitleExpectedText: string;

  constructor() {
    super();
    this.pageName = "Contact form Thank you";
    this.url = "/Contact-Us/contact-form-thank-you.html";
    this.successTitle = "h1";
    this.successTitleExpectedText = "Thank You for your Message!";
  }
}

export class ContactFormHandlerPageInTest extends PageInTest {
  errorMessage: string;
  errorMessageText: string;

  constructor() {
    super();
    this.pageName = "Contact form handler";
    this.title = "Contact form handler";
    this.url = "/Contact-Us/contact_us.php";
    this.errorMessage = "body";
    this.errorMessageText = "Error: Invalid email address";
  }
}

export class LoginPortalPageInTest extends PageInTest {
  userNameInput: string;
  passwordInput: string;
  submitButton: string;

  constructor() {
    super();
    this.pageName = "Login page";
    this.title = "WebDriver | Login Portal";
    this.url = "/Login-Portal/index.html?";
    this.userNameInput = "[placeholder='Username']";
    this.passwordInput = "[placeholder='Password']";
    this.submitButton = "button#login-button";
  }
}
