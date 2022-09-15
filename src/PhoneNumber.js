import libPhoneNumber from "google-libphonenumber";

const asYouTypeFormatter = libPhoneNumber.AsYouTypeFormatter;

class PhoneNumber {
    // eslint-disable-next-line class-methods-use-this
    format(number, iso2) {
        const formatter = new asYouTypeFormatter(iso2); // eslint-disable-line new-cap
        let formatted;

        number.replace(/-/g, "")
            .replace(/ /g, "")
            .replace(/\(/g, "")
            .replace(/\)/g, "")
            .split("")
            .forEach((n) => {
                formatted = formatter.inputDigit(n);
            });

        return formatted;
    }
}

export default new PhoneNumber();
