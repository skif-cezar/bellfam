import {FieldsForm} from "src/app/components/form/Form";
import {UseFormReset} from "react-hook-form";
import {getFormatPhoneNumber} from "src/app/utility/getFormatPhoneNumber";

// Specify your bot's token
const token = process.env["REACT_APP_BOT_TOKEN"];
// Specify the ID of your chat with the bot
const chatId = process.env["REACT_APP_CHAT_ID"];

export const setFormData = async (
  data: FieldsForm,
  reset: UseFormReset<FieldsForm>,
): Promise<void> => {
  reset();
  reset({tel: ""});

  const {fname, lname, email, comment, tel}: FieldsForm = data;
  const telFormat = getFormatPhoneNumber(tel);

  const messageBot = `<b>First name:</b> ${fname}
<b>Last name:</b> ${lname}
<b>Email:</b> ${email}
<b>Phone number:</b> ${telFormat}
<b>Message:</b> ${comment}`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        chat_id: chatId,
        text: messageBot,
        parse_mode: "HTML",
      }),
    });

    if (response.ok) {
      // eslint-disable-next-line no-console
      console.log("Message sent successfully!");
    } else {
      console.error("Failed to send message");
    }
  } catch (error) {
    console.error(error);
  }
};
