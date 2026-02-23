"use client";
import * as z from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";
import { Button } from "./ui/button";
import { Field, FieldLabel, FieldDescription, FieldError } from "./ui/field";
import { cn } from "../lib/utils";
import { BRAND_COLOR } from "../config/brand";

const enquirySchema = z.object({
  fullName: z.string().min(2, "Full Name is required"),
  gender: z.enum(["Male", "Female"]),
  country: z.string().min(2, "Country is required"),
  whatsapp: z.string().min(8, "WhatsApp Number is required"),
  message: z.string().min(5, "Message is required"),
});

type EnquiryFormValues = z.infer<typeof enquirySchema>;

export function EnquiryForm() {
  const form = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      fullName: "",
      gender: "Male",
      country: "",
      whatsapp: "",
      message: "",
    },
  });

  function onSubmit(data: EnquiryFormValues) {
    // handle enquiry
    console.log(data);
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-6 max-w-xl mx-auto p-6 rounded-2xl bg-white/5"
      style={{ boxShadow: `0 4px 32px 0 ${BRAND_COLOR}33` }}
    >
      <Controller
        name="fullName"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Full Name</FieldLabel>
            <Input
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              autoComplete="off"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Controller
        name="gender"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="gender">Gender</FieldLabel>
            <Select
              value={field.value}
              onValueChange={field.onChange}
              name={field.name}
            >
              <SelectTrigger id="gender" aria-invalid={fieldState.invalid}>
                <SelectValue placeholder="Select Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Female">Female</SelectItem>
              </SelectContent>
            </Select>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Controller
        name="country"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Country</FieldLabel>
            <Input
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              autoComplete="country"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Controller
        name="whatsapp"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>
              WhatsApp Number (with country code)
            </FieldLabel>
            <Input
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              autoComplete="tel"
              placeholder="e.g. +1234567890"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Controller
        name="message"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Message</FieldLabel>
            <Textarea
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              autoComplete="off"
              rows={4}
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Button type="submit" className="w-full">
        Send Enquiry
      </Button>
    </form>
  );
}
