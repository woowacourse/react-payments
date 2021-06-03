export const getCardId = () => {
  const date = new Date();
  const YYYY = date.getFullYear().toString();
  const MM = date.getMonth().toString().padStart(2, '0');
  const DD = date.getDate().toString().padStart(2, '0');
  const hh = date.getHours().toString().padStart(2, '0');
  const mm = date.getMinutes().toString().padStart(2, '0');
  const ss = date.getSeconds().toString().padStart(2, '0');

  return `${YYYY}-${MM}-${DD}-${hh}${mm}${ss}`;
};

export const getCardNickName = (company, owner) => {
  const birds = ['직박구리', '두루미', '논병아리', '해오라기', '메추라기', '닭', '꿩', '딱따구리'];
  return `${owner ? owner : birds[Math.floor(Math.random() * 8)]}의 ${company}카드`;
};
