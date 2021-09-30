function useCurrency() {
  const handleCurrency = num => {
    const Units = ['', '만', '억', '조'];
    let answer = '';
    const unit = 10000;
    let index = 0;
    let division = Math.pow(unit, index);

    while (Math.floor(num / division) > 0) {
      const mod = Math.floor((num % (division * unit)) / division);
      if (mod) {
        const modToString = mod
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        answer = `${modToString}${Units[index]} ` + answer;
      }
      division = Math.pow(unit, ++index);
    }
    return answer;
  };

  const handleMillion = num => {
    const million = (num / 10000).toLocaleString();
    return million;
  };

  const handleBillion = num => {
    const billion = (num / 100000000).toFixed(2);
    return billion;
  };

  return { handleCurrency, handleMillion, handleBillion };
}

export default useCurrency;
