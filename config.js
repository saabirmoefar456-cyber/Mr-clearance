// ============================================================
//  STORE CONFIG — edit only this file for each new client
//  Built by Sabah | builtbysabah (Instagram)
//  Stack: Firebase + PayFast + Imgur + EmailJS + Cloudflare
// ============================================================

const STORE_CONFIG = {

  // ----------------------------------------------------------
  //  BRANDING
  // ----------------------------------------------------------
  storeName:        "My Store Name",
  storeTagline:     "Your one-line store tagline here",
  logoUrl:          "https://i.imgur.com/YOURLOGO.png",  // upload to Imgur
  faviconUrl:       "https://i.imgur.com/YOURFAVICON.png",

  // Colours — use any valid CSS colour (hex, rgb, hsl)
  primaryColor:     "#222222",   // main buttons, header background
  accentColor:      "#F5A623",   // highlights, badges, sale tags
  textOnPrimary:    "#FFFFFF",   // text that sits on primaryColor
  heroBackground:   "#F7F7F7",   // hero section background

  // ----------------------------------------------------------
  //  CONTACT & SOCIAL
  // ----------------------------------------------------------
  whatsappNumber:   "27821234567",   // international format, no + or spaces
  email:            "store@example.co.za",
  instagramHandle:  "@yourstorehandle",
  facebookUrl:      "",              // leave empty to hide

  city:             "Cape Town",
  province:         "Western Cape",

  // ----------------------------------------------------------
  //  FIREBASE — create a new project per client at console.firebase.google.com
  // ----------------------------------------------------------
  firebase: {
    apiKey:            "AIzaSy-REPLACE-THIS",
    authDomain:        "your-project.firebaseapp.com",
    projectId:         "your-project-id",
    storageBucket:     "your-project.appspot.com",
    messagingSenderId: "000000000000",
    appId:             "1:000000000000:web:REPLACE"
  },

  // ----------------------------------------------------------
  //  PAYFAST — client registers their own account at payfast.co.za
  // ----------------------------------------------------------
  payfast: {
    merchantId:   "10000000",          // from PayFast dashboard
    merchantKey:  "xxxxxxxxxxxxxxxx",  // from PayFast dashboard
    passphrase:   "",                  // optional — leave empty if not set
    sandbox:      false,               // SET TO FALSE for live payments
    returnUrl:    "https://yourdomain.co.za/order-success.html",
    cancelUrl:    "https://yourdomain.co.za/cart.html",
    notifyUrl:    "https://yourdomain.co.za/notify.html"
  },

  // ----------------------------------------------------------
  //  IMGUR API — for product image uploads in admin panel
  //  Register a free app at api.imgur.com/oauth2/addclient
  // ----------------------------------------------------------
  imgurClientId: "REPLACE_WITH_IMGUR_CLIENT_ID",

  // ----------------------------------------------------------
  //  EMAILJS — order confirmation emails
  //  Register free at emailjs.com — 200 emails/month free
  // ----------------------------------------------------------
  emailjs: {
    serviceId:   "service_XXXXXXX",
    templateId:  "template_XXXXXXX",
    publicKey:   "XXXXXXXXXXXXXXXXX"
  },

  // ----------------------------------------------------------
  //  SHIPPING & COURIER
  //  Options: "paxi" | "pudo" | "both" | "none"
  // ----------------------------------------------------------
  courier: "paxi",

  shipping: {
    flatRate:              65,    // default shipping cost in Rands
    freeShippingThreshold: 700,   // free shipping above this amount (0 = disabled)
    localPickupEnabled:    false,
    localPickupLabel:      "Collect in Cape Town (free)"
  },

  // ----------------------------------------------------------
  //  PRODUCTS & CATEGORIES
  //  Keep category names short — they appear in nav and filters
  // ----------------------------------------------------------
  categories: [
    "All",
    "Category 1",
    "Category 2",
    "Category 3",
    "Sale"
  ],

  // Optional: assign a colour to each category for theming
  // Leave as empty object {} to use primaryColor for all
  categoryColors: {
    "Sale":        "#E53E3E",
    "Category 1":  "",
    "Category 2":  "",
    "Category 3":  ""
  },

  // ----------------------------------------------------------
  //  ADMIN PANEL
  //  Roles: "owner" gets full access. "manager" can add/edit products.
  //  "staff" can view orders only. Leave extra roles empty to disable.
  // ----------------------------------------------------------
  admin: {
    ownerPassword:    "SET_A_STRONG_PASSWORD",
    managerPassword:  "",    // leave empty to disable manager role
    staffPassword:    ""     // leave empty to disable staff role
  },

  // ----------------------------------------------------------
  //  FEATURES — toggle on/off per client
  //  Set true/false depending on which package they purchased
  // ----------------------------------------------------------
  features: {
    barcodeScanning:     false,   // Premium package only
    customerAccounts:    true,    // Business + Premium
    orderTracking:       true,    // Business + Premium
    wishlist:            false,
    productReviews:      false,
    lowStockAlerts:      true,    // shows warning in admin when stock < 5
    salesDashboard:      false,   // Premium package only
    whatsappOrderButton: true,    // always useful — keeps client happy
    instagramFeedWidget: false    // add-on R800
  },

  // ----------------------------------------------------------
  //  SEO & META
  // ----------------------------------------------------------
  seo: {
    metaTitle:       "My Store Name | Shop Online in South Africa",
    metaDescription: "Shop [category] online with fast delivery via PAXI. Secure PayFast checkout.",
    metaImage:       "https://i.imgur.com/YOUROGIMAGE.png",  // 1200x630px
    googleAnalyticsId: ""   // paste GA4 measurement ID if client wants analytics
  },

  // ----------------------------------------------------------
  //  CURRENCY & LOCALE
  // ----------------------------------------------------------
  currency:         "ZAR",
  currencySymbol:   "R",
  locale:           "en-ZA",

  // ----------------------------------------------------------
  //  FOOTER TEXT
  // ----------------------------------------------------------
  footerTagline:  "Fast delivery across South Africa",
  footerCopyright: `© ${new Date().getFullYear()} My Store Name. All rights reserved.`,
  builtBy:         "Site built by Sabah | instagram.com/builtbysabah"

};

// Export for use across all JS files
// Usage in other files: const { storeName, firebase, payfast } = STORE_CONFIG;
if (typeof module !== "undefined") module.exports = STORE_CONFIG;
