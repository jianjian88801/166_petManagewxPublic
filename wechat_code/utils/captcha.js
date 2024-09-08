function generateCaptcha(canvasId, width, height) {
    const ctx = wx.createCanvasContext(canvasId);
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
  
    for (let i = 0; i < 4; i++) {
      captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    const colors = ['#FF0000', '#00FF00', '#0000FF', '#FF00FF'];
    const fontSize = 18
    let xPos = (width - fontSize * 4) / 2;
    const yPos = height / 2 + fontSize / 2;
  
    for (let i = 0; i < captcha.length; i++) {
      ctx.setFontSize(fontSize);
      ctx.setFillStyle(colors[Math.floor(Math.random() * colors.length)]);
      ctx.fillText(captcha[i], xPos, yPos);
      xPos += fontSize;
    }
  
    ctx.draw();
  
    return captcha;
  }
  
  function validateCaptcha(userInput, captcha) {
    return userInput === captcha;
  }
  
  module.exports = {
    generateCaptcha,
    validateCaptcha
  };
  