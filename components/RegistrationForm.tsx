"use client";
import * as z from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BRAND_COLOR } from "../config/brand";
import { Input } from "./ui/input";
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

const registrationSchema = z.object({
  fullName: z.string().min(2, "Full Name is required"),
  gender: z.enum(["Male", "Female"]),
  age: z.string().min(1, "Age is required"),
  country: z.string().min(2, "Country is required"),
  whatsapp: z.string().min(8, "WhatsApp Number is required"),
  course: z.enum(["Basic", "Tajweed", "Recitation", "Hifz", "Revision"]),
  timing: z.string().min(2, "Preferred Class Timing is required"),
});

type RegistrationFormValues = z.infer<typeof registrationSchema>;

export function RegistrationForm() {
  const form = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      fullName: "",
      gender: "Male",
      age: "",
      country: "",
      whatsapp: "",
      course: "Basic",
      timing: "",
    },
  });

  function onSubmit(data: RegistrationFormValues) {
    // handle registration
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
        name="age"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Age</FieldLabel>
            <Input
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              type="number"
              min="1"
              autoComplete="off"
            />
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
        name="course"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor="course">Course Interested In</FieldLabel>
            <Select
              value={field.value}
              onValueChange={field.onChange}
              name={field.name}
            >
              <SelectTrigger id="course" aria-invalid={fieldState.invalid}>
                <SelectValue placeholder="Select Course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Basic">Basic</SelectItem>
                <SelectItem value="Tajweed">Tajweed</SelectItem>
                <SelectItem value="Recitation">Recitation</SelectItem>
                <SelectItem value="Hifz">Hifz</SelectItem>
                <SelectItem value="Revision">Revision</SelectItem>
              </SelectContent>
            </Select>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Controller
        name="timing"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Preferred Class Timing</FieldLabel>
            <Input
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              autoComplete="off"
              placeholder="e.g. 7:00 PM - 8:00 PM"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Button type="submit" className="w-full">
        Register
      </Button>
    </form>
  );
}
