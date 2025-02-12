const languageSelector = document.querySelector('.language-selector');
const about = document.querySelector('.about')
const subscribe = document.querySelector('.subscribe')
const contact = document.querySelector('.contact')
const headline = document.querySelector('.headline')
const subheadline = document.querySelector('.subheadline')
const subscribeTitle = document.querySelector('.subscribe-title')
const subscribeText = document.querySelector('.subscribe-text')
const subscribeButton = document.querySelector('.subscribe-button')
const phoneNumber = document.querySelector('.phone-number');
const rights = document.querySelector('footer p span');

function swapLang() {
 
   
    const body = document.querySelector('body');
    body.classList.toggle('eng');
		if (body.classList.contains('eng')) {
			languageSelector.value = "اللغة العربية"
            body.style.fontSize = '15px'
          
			
			subheadline.innerText = "Subscribe to our sports newsletter now for the latest news,\n exclusive insights, and top highlights as they happen! Don’t miss a match—be part of the action! "
			subscribeTitle.innerText = "Subscribe to Our Service"
			subscribeText.innerText = "Enter your mobile number to receive instant sports news updates."
			subscribeButton.innerText = "Subscribe"
			phoneNumber.placeholder = "Enter your mobile number"
			rights.innerText = "All rights reserved for Next Stage Software."
			
		} else {
         
			languageSelector.value = "English"
            body.style.fontSize = '26px'
			subheadline.innerText = "اشترك في نشرتنا الرياضية الآن لتصلك أحدث الأخبار\n !التحليلات الحصرية، وأبرز اللحظات فور حدوثها! لا تفوّت أي مباراة، كن دائمًا في الملعب"
			subscribeTitle.innerText = "اشترك بخدمتنا"
			subscribeText.innerText = "أدخل رقم هاتفك لتصلك آخر أخبار الرياضة أولا بأول"
			subscribeButton.innerText = "اشترك"
			phoneNumber.placeholder = "أدخل رقم هاتفك"
			rights.innerText = "  جميع الحقوق محفوظة لشركة المرحلة القادمة " 
		}
}

languageSelector.addEventListener('click', swapLang)

