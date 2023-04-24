const checkExpirationDate = (expirationDate: [string, string]) => {
  const [month, year] = expirationDate;
  const now = new Date();
  const nowYear = now.getFullYear() % 100;
  const nowMonth = now.getMonth() + 1;

  const isValidDate = () => {
    if (nowYear > Number(year)) {
      return false;
    }
    if (nowYear === Number(year) && nowMonth > Number(month)) {
      return false;
    }
    return true;
  };

  if (Number(month) > 12 || Number(month) < 1) {
    throw new Error('만료 날짜(월)를 다시 확인해주세요.');
  }

  if (!isValidDate()) {
    throw new Error('만료 날짜가 지났습니다.');
  }
};

export default checkExpirationDate;
