
var EC = protractor.ExpectedConditions;

/**
 * Authentication Page main constructor.
 */
function AuthenticationPage() {
  var currentUser = null;

  this.usernameField = $('input#edit-name');
  this.passwordField = $('input#edit-pass');
  this.loginButton   = $('input#edit-submit');
  this.loggedIn      = $('body.logged-in');

  this.login = function (user, password) {
    if (user === currentUser) return; // Avoid login with same current logged user.
    else this.logout(); // Perform logout previous to login.

    this.get();
    browser.wait(EC.visibilityOf(this.usernameField), browser.params.timeoutLimit);
    this.usernameField.sendKeys(user);

    this.passwordField.sendKeys(password);
    this.loginButton.click();

    currentUser = user;
  };

  /**
   * Perform user logout.
   * In case no user was logged in, avoid doing logout request.
   */
  this.logout = function() {
    if (currentUser) browser.get('user/logout');
    currentUser = null;
  }

  this.get = function() {
    browser.get('user');
  };

};

module.exports = new AuthenticationPage();
