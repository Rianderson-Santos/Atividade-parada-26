
    // Função para validar o formulário
    function validateForm() {
      var form = document.getElementById('myForm');

      // Validação do campo de nome
      var nameInput = form.elements['name'];
      if (nameInput.value === '') {
        nameInput.classList.add('error');
        return false;
      }

      // Validação do campo de e-mail
      var emailInput = form.elements['email'];
      if (emailInput.value === '') {
        emailInput.classList.add('error');
        return false;
      }

      // Validação do campo de telefone
      var phoneInput = form.elements['phone'];
      if (phoneInput.value === '') {
        phoneInput.classList.add('error');
        return false;
      }

      // Validação do campo de país
      var countryInput = form.elements['country'];
      if (countryInput.value === '') {
        countryInput.classList.add('error');
        return false;
      }

      // Validação do campo de gênero
      var genderInputs = form.elements['gender'];
      var genderSelected = false;
      for (var i = 0; i < genderInputs.length; i++) {
        if (genderInputs[i].checked) {
          genderSelected = true;
          break;
        }
      }

      if (!genderSelected) {
        var genderLabel = form.querySelector('label[for="gender"]');
        genderLabel.classList.add('error');
        return false;
      }

      // O formulário é válido
      return true;
    }

    // Evento de envio do formulário
    var form = document.getElementById('myForm');
    form.addEventListener('submit', function(event) {
      if (!validateForm()) {
        event.preventDefault();
      }
    });