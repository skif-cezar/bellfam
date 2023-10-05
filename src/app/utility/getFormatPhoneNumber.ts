export const getFormatPhoneNumber = (phoneNumberString: string): string => {
  const formatNumber = `+1 (${phoneNumberString.slice(0, 3)}) ${phoneNumberString.slice(
    3, 6)}-${phoneNumberString.slice(6, 8)}-${phoneNumberString.slice(8)}`;
  return formatNumber;
};
