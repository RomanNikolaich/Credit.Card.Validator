export function formValidity(form) {
    document.querySelectorAll('.error-no-value').forEach(el => el.remove());
      
    let hasErrors = true;

    [...form.elements].forEach(el => {
        if (!el.name) return;

        for (let key in errors[el.name]) {
            if (el.validity[key]) {
              hasErrors = false;

              const errorDiv = document.createElement('div');
              errorDiv.classList.add('error-no-value');
              errorDiv.textContent = errors[el.name][key];

              form.append(errorDiv);

              break;
            }
        }
    });

    if (hasErrors) {
          return hasErrors;
    }

    return hasErrors;
};

export const errors = {
    card: {
        valueMissing: 'Необходимо ввести номер карты',
        patternMismatch: 'Номер карты может содержать только цифры БЕЗ ПРОБЕЛОВ',
    }
};
