/* eslint-disable @typescript-eslint/typedef */
import React, {forwardRef} from "react";
import {motion} from "framer-motion";
import {Controller, Message, useForm} from "react-hook-form";
import InputMask from "react-input-mask";
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

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<FieldsForm>({mode: "onBlur"});

  const onSubmit = async (data: FieldsForm): Promise<void> => {
    try {
      const response = await fetch("/post", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data),
      });

      const result = await response.json();
      // eslint-disable-next-line no-console
      console.log(result);
      reset();
      reset({tel: ""});
    } catch (error) {
      console.error(error);
    }
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
        render={({field}: {field: any}) => {
          return (
            <InputMask
              mask="+1 (999) 999-99-99"
              placeholder="+1 (___) ___-__-__"
              {...field}
              onChange={(e: any) => {
                const value = e.target.value.replace(/\D/g, "");
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
      <button
        className={BUTTON_STYLES} type="submit"

      >
        Send
      </button>
    </form>
  );
});

export const MForm = motion(Form);
