describe('Protractor Demo App', function() {
    var userName = element(by.xpath('//*[@id="login"]/input'));
    var pwdWord = element(by.xpath('//*[@id="password"]/input'));
    var signIn = element(by.buttonText('Sign in'));

   it('should have a title', function() {
       browser.get('http://ui-staging.c1exchange.com/login');
       expect(browser.getTitle()).toEqual('C1X | Class One Exchange');
    });

    it('passing values', function() {
      userName.sendKeys('dentsu-planner');
      pwdWord.sendKeys('test');
      signIn.click();
      expect(browser.getTitle()).toEqual('C1X | Class One Exchange');
      browser.driver.sleep(1000);
   });
});
  
