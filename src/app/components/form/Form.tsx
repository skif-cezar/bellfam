import React, {forwardRef} from "react";
import {motion} from "framer-motion";
import {Controller, Message, useForm} from "react-hook-form";
import InputMask from "react-input-mask";
// import emailjs from "@emailjs/browser";
import clsx from "clsx";
import styles from "src/app/components/form/Form.module.scss";

export type FieldsForm = {
  fname?: string;
  lname?: string;
  email?: string;
  message?: Message;
  tel?: string;
  comment?: string;
};

/**
 * Form component
 */
export const Form: React.FC = forwardRef((props: any, ref:any) => {
  const FORM_STYLES = clsx(styles.form);
  const FORM_ERRORS_STYLES = clsx(styles.form__errors);
  const BUTTON_STYLES = clsx(styles.button);
  /* const SERVICE_ID = "service_ocx48um";
  const TEMPLATE_ID = "template_5u85bnr";
  const PUBLIC_KEY = "knM04FfZqcBn3XNcb"; */

  // eslint-disable-next-line @typescript-eslint/typedef
  const {
    control,
    register,
    handleSubmit,
    reset,
    // eslint-disable-next-line @typescript-eslint/typedef
    formState: {errors},
  } = useForm<FieldsForm>({mode: "onBlur"});
  const onSubmit = (data: any): void => {
    // eslint-disable-next-line no-console
    console.log(data);
    // Для телефона в конце парсинг tel.replace(/^\+\d{1}[\b](\d{3})[\b]\d{3}-\d{2}-\d{2}$/, "");
    reset();
    /* emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY)
      // eslint-disable-next-line @typescript-eslint/typedef
      .then((result) => {
        // eslint-disable-next-line no-console
        console.log(result.text);
      // eslint-disable-next-line @typescript-eslint/typedef
      }, (error) => {
        // eslint-disable-next-line no-console
        console.log(error.text);
      }); */
  };

  return (
    <form
      className={FORM_STYLES} onSubmit={handleSubmit(onSubmit)}
      ref={ref}
      {...props}
    >
      <input
        {...register("fname", {
          minLength: {
            value: 2,
            message: "Minimum 2 characters",
          },
          required: "This field is required",
        })}
        type="text"
        placeholder="First name"
        maxLength={40}
      />
      {errors["fname"] && <span className={FORM_ERRORS_STYLES}>{errors["fname"].message}</span>}
      <input
        {...register("lname", {
          minLength: {
            value: 2,
            message: "Minimum 2 characters",
          },
          required: "This field is required",
        })}
        type="text"
        placeholder="Last name"
        maxLength={40}
      />
      {errors["lname"] && <span className={FORM_ERRORS_STYLES}>{errors["lname"].message}</span>}
      <input
        {...register("email", {
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Incorrect email",
          },
        })}
        type="text"
        placeholder="Email"
        maxLength={60}
      />
      {errors["email"] && <span className={FORM_ERRORS_STYLES}>{errors["email"].message}</span>}

      <Controller
        name="tel"
        control={control}
        rules={{
          required: "Phone number is required",
          minLength: {value: 11, message: "Phone number must be at least 11 digits"},
        }}
        // eslint-disable-next-line @typescript-eslint/typedef
        render={({field}) => {
          return (
            <InputMask
              mask="+1 (999) 999-99-99"
              placeholder="+1 (___) ___-__-__"
              {...field}
              onChange={(e: any) => {
                const value = e.target.value.replace(/\D/g, "");
                // eslint-disable-next-line no-console
                console.log(value);
                field.onChange(value);
              }}
            />
          );
        }}
      />
      {errors["tel"] && <span className={FORM_ERRORS_STYLES}>{errors["tel"].message}</span>}
      <input
        {...register("comment", {
          minLength: {
            value: 5,
            message: "Minimum 5 characters",
          },
        })}
        maxLength={40}
        placeholder="Message"
      />
      {errors["comment"] && <span className={FORM_ERRORS_STYLES}>{errors["comment"].message}</span>}
      <button className={BUTTON_STYLES} type="submit">
        Send
      </button>
    </form>
  );
});

export const MForm = motion(Form);
