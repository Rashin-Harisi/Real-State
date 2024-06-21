const separatedNumber = (number) => {
    const Number = number
      .toString()
      .match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);
    const joinedNumber = Number.join(",");
    return joinedNumber;
  };

export {separatedNumber}