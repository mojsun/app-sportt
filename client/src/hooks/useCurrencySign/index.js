export default function useCurrencySign(CurrencySign) {
  let sign = "\u0024";
  switch (CurrencySign) {
    case "USD":
      sign = "\u0024";
      break;
    case "CAD":
      sign = "\u0024";
      break;
    case "EUR":
      sign = "\u20AC";
      break;
    case "GBP":
      sign = "\u00A3";
      break;
    case "JPY":
      sign = "\u00A5";
      break;
    case "AUD":
      sign = "\u0024";
      break;
    case "":
      sign = "\u0024";
      break;
    case null:
      sign = "\u0024";
      break;
    default:
      sign = "error";
      break;
  }
  return sign;
}
