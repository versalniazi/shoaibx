import { z } from "zod";

export const serviceOptions = [
  { value: "website-development", label: "Website Design & Development" },
  { value: "digital-marketing", label: "Digital Marketing" },
  { value: "online-advertising", label: "Online Advertising (Google / Social Ads)" },
  { value: "seo", label: "Search Engine Optimisation (SEO)" },
  { value: "website-maintenance", label: "Website Maintenance & Support" },
  { value: "package", label: "One of your fixed-price packages" },
  { value: "other", label: "Something else / not sure yet" },
] as const;

export const budgetOptions = [
  { value: "under-100", label: "Under £100" },
  { value: "100-500", label: "£100 – £500" },
  { value: "500-1500", label: "£500 – £1,500" },
  { value: "1500-5000", label: "£1,500 – £5,000" },
  { value: "5000-plus", label: "£5,000+" },
  { value: "not-sure", label: "Not sure yet" },
] as const;

const serviceValues = serviceOptions.map((o) => o.value) as [string, ...string[]];
const budgetValues = budgetOptions.map((o) => o.value) as [string, ...string[]];

const optionalUrl = z
  .string()
  .trim()
  .max(200, "Please keep the website address under 200 characters.")
  .refine(
    (v) => v === "" || /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(\/[^\s]*)?$/i.test(v),
    "Please enter a valid website address, e.g. www.example.co.uk",
  );

const optionalPhone = z
  .string()
  .trim()
  .max(30, "Please enter a valid phone number.")
  .refine((v) => v === "" || /^[+()\d\s-]{7,30}$/.test(v), "Please enter a valid phone number.");

/** Shared between the browser (instant feedback) and the API route (authoritative). */
export const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name.").max(100, "Please keep your name under 100 characters."),
  businessName: z.string().trim().max(120, "Please keep the business name under 120 characters."),
  email: z.string().trim().max(160).email("Please enter a valid email address."),
  phone: optionalPhone,
  website: optionalUrl,
  service: z.enum(serviceValues, { message: "Please choose the service you need." }),
  budget: z.enum(budgetValues, { message: "Please choose an approximate budget." }),
  message: z
    .string()
    .trim()
    .min(20, "Please tell us a little more about your project (at least 20 characters).")
    .max(5000, "Please keep your message under 5,000 characters."),
  packageRef: z.string().trim().max(80),
  consent: z.literal(true, { message: "Please confirm you have read the Privacy Policy." }),
});

export type ContactInput = z.infer<typeof contactSchema>;

export function labelFor(options: readonly { value: string; label: string }[], value: string) {
  return options.find((o) => o.value === value)?.label ?? value;
}
