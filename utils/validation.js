module.exports = {
  validateLoginInput: (username, password) => {
    if (!username || !password) {
      return false;
    }
    // Adicionar mais validações conforme necessário
    return true;
  }
};
