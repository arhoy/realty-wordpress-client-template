// format listedprice from wp acf field
export const formatPrice = (listedprice, currency) => {
  const price = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: currency || 'CAD',
  })
    .format(listedprice)
    .slice(0, -3);
  return price;
};
