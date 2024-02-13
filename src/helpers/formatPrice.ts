export function formatPrice(price: number | string): string {
  let priceStr = price.toString();
  let priceNumber = Number(price);

  if (priceNumber >= 1000 && priceNumber <= 9999) {
    priceStr = priceStr.substring(0, 1) + "," + priceStr.substring(1);
  } else if (priceNumber >= 10000 && priceNumber <= 99999) {
    priceStr = priceStr.substring(0, 2) + "," + priceStr.substring(2);
  } else if (priceNumber >= 100000 && priceNumber <= 999999) {
    priceStr = priceStr.substring(0, 3) + "," + priceStr.substring(3);
  }

  return priceStr;
}
