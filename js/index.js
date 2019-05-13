const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let header = document.querySelector("header");
header.querySelectorAll("nav a").forEach((item, index) => item.innerText = siteContent["nav"]["nav-item-" + (index + 1)]);



// CTA Section
let cta = document.querySelector(".cta");
cta.querySelector("#cta-img").src = siteContent["cta"]["img-src"];
cta.querySelector("h1").innerText = siteContent["cta"]["h1"];
cta.querySelector("button").innerText = siteContent["cta"]["button"];

//Main content section
const mainContent = document.querySelector(".main-content");

const topConent = mainContent.querySelector(".top-content");
const topTextContent = topConent.querySelectorAll(".text-content");
topTextContent[0].querySelector("h4").innerText = siteContent["main-content"]["features-h4"];
topTextContent[0].querySelector("p").innerText = siteContent["main-content"]["features-content"];
topTextContent[1].querySelector("h4").innerText = siteContent["main-content"]["about-h4"];
topTextContent[1].querySelector("p").innerText = siteContent["main-content"]["about-content"];

mainContent.querySelector("img").src = siteContent["main-content"]["middle-img-src"];

const bottomContent = mainContent.querySelector(".bottom-content");
const bottomTextContent = bottomContent.querySelectorAll(".text-content");
bottomTextContent[0].querySelector("h4").innerText = siteContent["main-content"]["services-h4"];
bottomTextContent[0].querySelector("p").innerText = siteContent["main-content"]["services-content"];
bottomTextContent[1].querySelector("h4").innerText = siteContent["main-content"]["product-h4"];
bottomTextContent[1].querySelector("p").innerText = siteContent["main-content"]["product-content"];
bottomTextContent[2].querySelector("h4").innerText = siteContent["main-content"]["vision-h4"];
bottomTextContent[2].querySelector("p").innerText = siteContent["main-content"]["vision-content"];

//Contact section

const contact = document.querySelector(".contact");
contact.querySelector("h4").innerText = siteContent["contact"]["contact-h4"];
const contactP = contact.querySelectorAll("p");
contactP[0].innerText = siteContent["contact"]['address'];
contactP[1].innerText = siteContent["contact"]['phone'];
contactP[2].innerText = siteContent["contact"]['email'];