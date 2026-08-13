// Language Translations Data
const translations = {
    hi: {
        home: "होम",
        aboutNav: "परिचय",
        gausevaNav: "गौ सेवा",
        contactNav: "संपर्क",
        heroTitle: "आयुष चौहान",
        heroTagline: "युवा सोच, नया विकास - जन सेवा ही हमारा संकल्प",
        btnJoin: "मूवमेंट से जुड़ें",
        gauTitle: "गौ माता की सेवा हमारा कर्तव्य है",
        gauDesc: "गौ सेवा और उनकी सुरक्षा के लिए हम सदैव तत्पर हैं। किसी भी समस्या या सहायता के लिए हमसे तुरंत संपर्क करें।",
        aboutTitle: "आयुष चौहान के बारे में",
        aboutDesc: "युवाओं के अधिकार, समाज सुधार और जन-जन की समस्याओं के समाधान के लिए सदैव समर्पित। हमारा उद्देश्य हर नागरिक को न्याय और विकास से जोड़ना है।",
        contactTitle: "संपर्क करें / Helpdesk"
    },
    en: {
        home: "Home",
        aboutNav: "About",
        gausevaNav: "Gau Seva",
        contactNav: "Contact",
        heroTitle: "Ayush Chauhan",
        heroTagline: "Youth Vision, New Progress - Dedicated to Public Service",
        btnJoin: "Join the Movement",
        gauTitle: "Serving Gau Mata is Our Duty",
        gauDesc: "We are always dedicated to Gau Seva and protection. For any issue or support, contact us immediately.",
        aboutTitle: "About Ayush Chauhan",
        aboutDesc: "Always dedicated to youth rights, social reform, and solving public issues. Our goal is to bring justice and development to every citizen.",
        contactTitle: "Contact Us / Helpdesk"
    },
    hinglish: {
        home: "Home",
        aboutNav: "About",
        gausevaNav: "Gau Seva",
        contactNav: "Contact",
        heroTitle: "Ayush Chauhan",
        heroTagline: "Yuva Soch, Naya Vikas - Jan Seva Hi Hamara Sankalp",
        btnJoin: "Movement Se Judein",
        gauTitle: "Gau Mata Ki Seva Hamara Kartavya Hai",
        gauDesc: "Gau seva aur unki suraksha ke liye hum hamesha ready hain. Kisi bhi samasya ya help ke liye turant contact karein.",
        aboutTitle: "Ayush Chauhan Ke Bare Me",
        aboutDesc: "Youth rights, social work, aur logon ki problem solve karne ke liye hamesha tatpar. Hamara aim har nagrik ko vikas se jodna hai.",
        contactTitle: "Contact Karein / Helpdesk"
    }
};

function selectLanguage(lang) {
    document.getElementById("langModal").style.display = "none";
    document.getElementById("langSelect").value = lang;
    updatePageLanguage(lang);
}

function changeLanguageFromDropdown(lang) {
    updatePageLanguage(lang);
}

function updatePageLanguage(lang) {
    const data = translations[lang];
    
    document.querySelector(".lang-home").innerText = data.home;
    document.querySelector(".lang-about").innerText = data.aboutNav;
    document.querySelector(".lang-gauseva").innerText = data.gausevaNav;
    document.querySelector(".lang-contact").innerText = data.contactNav;
    
    document.querySelector(".lang-hero-title").innerText = data.heroTitle;
    document.querySelector(".lang-hero-tagline").innerText = data.heroTagline;
    document.querySelector(".lang-btn-join").innerText = data.btnJoin;
    
    document.querySelector(".lang-gau-title").innerText = data.gauTitle;
    document.querySelector(".lang-gau-desc").innerText = data.gauDesc;
    
    document.querySelector(".lang-about-title").innerText = data.aboutTitle;
    document.querySelector(".lang-about-desc").innerText = data.aboutDesc;
    
    document.querySelector(".lang-contact-title").innerText = data.contactTitle;
}
