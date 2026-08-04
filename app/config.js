// ============================================================
// SKÖRDA — dina nycklar
//
// DEN HÄR FILEN ÄR DIN. Claude rör den ALDRIG.
// Lägg in dina nycklar här EN gång. De överlever alla
// uppdateringar av index.html.
//
// Ladda upp den här filen bredvid index.html i app/-mappen,
// på samma sätt som index.html. Den behöver bara laddas upp
// en gång, och sen när du ändrar en nyckel.
//
// Alla nycklar här är PUBLIKA — de är byggda för att ligga i
// appens kod. De hemliga nycklarna (service role, webhook-
// hemlighet, .p8) ligger ALDRIG här, de hör hemma på servern.
// ============================================================

window.SKORDA_CONFIG = {

  // RevenueCat, publik iOS-nyckel. Börjar med appl_
  // Finns i RevenueCat: Project settings -> API keys
  RC_IOS_KEY: 'appl_UQuxSgNLgvFdKoaVKEuVBvwUVNB',

  // RevenueCat, publik Android-nyckel. Börjar med goog_
  // Fyll i när Android-appen är tillagd i RevenueCat.
  RC_ANDROID_KEY: 'goog_MmgeMfMmIjlcIpFXzxuXzcslZTl',

  // Google-inloggning på Android. Web client id.
  // Lämna som den är tills Google-login på Android sätts upp.
  GOOGLE_WEB_CLIENT_ID: 'DIN_WEB_CLIENT_ID.apps.googleusercontent.com',

};
