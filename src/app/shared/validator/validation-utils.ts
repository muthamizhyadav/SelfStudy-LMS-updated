export class ValidationUtils {
  
    // Method to allow only numbers
    static allowOnlyNumbers(event: KeyboardEvent): void {
      const charCode = event.keyCode || event.which;
      // Check if charCode is not a number (0-9) or special keys like backspace
      if (charCode < 48 || charCode > 57) {
        event.preventDefault();
      }
    }
  
    // Method to allow only characters
    static allowOnlyCharacters(event: KeyboardEvent): void {
      const charCode = event.keyCode || event.which;
      // Check if charCode is not a letter (a-z or A-Z) or special keys like backspace
      if (
        (charCode < 65 || charCode > 90) &&  // A-Z
        (charCode < 97 || charCode > 122)    // a-z
      ) {
        event.preventDefault();
      }
    }
  
    // Method to filter input to numbers only
    static filterNumbers(event: any): void {
      const inputValue = event.target.value;
      // Replace all non-numeric characters
      event.target.value = inputValue.replace(/[^0-9]/g, '');
    }
  
    // Method to filter input to characters only
    static filterCharacters(event: any): void {
      const inputValue = event.target.value;
      // Replace all non-alphabetic characters
      event.target.value = inputValue.replace(/[^a-zA-Z]/g, '');
    }
  }
  