import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  Form,
  FormControl,
  FormItem,
  FormMessage,
  FormLabel,
  FormField,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import toast from "react-hot-toast";

const ContactSchema = z.object({
  name: z
    .string()
    .min(8, {
      message: "Name must contain at least 8 character(s)",
    })
    .max(40, {
      message: "Name must contain only 40 character(s)",
    }),
  email: z
    .string()
    .min(8, {
      message: "Email must contain at least 8 character(s)",
    })
    .max(40, {
      message: "Email must contain only 40 character(s)",
    })
    .email("Invalid Email"),
  message: z
    .string()
    .min(8, {
      message: "Message must contain at least 8 character(s)",
    })
    .max(250, {
      message: "Message must contain only 250 character(s)",
    }),
});
export default function Contact() {
  const contactForm = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function validateFields(formData: z.infer<typeof ContactSchema>) {
    const validatedFields = ContactSchema.safeParse(formData);
    if (!validatedFields.success) {
      toast.error("Invalid Input");
    }

    return validatedFields.data;
  }

  async function sendEmail(formData: z.infer<typeof ContactSchema>) {
    try {
      const validatedFields = await validateFields(formData);
      toast.promise(
        (async () => {
          const response = await axios.post("/api/send-mail", validatedFields);
          console.log(response.data);
          return response.data;
        })(),
        {
          loading: "Sending...",
          success: "Email sent successfully!",
          error: "Failed to send email. Please try again.",
        }
      );
      contactForm.reset();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <section
      className="py-24 px-6 md:px-12 lg:px-24 min-h-screen "
      id="contact"
    >
      <div>
        <h2 className="text-3xl font-bold mb-12 text-center">Contact</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <Form {...contactForm}>
              <form
                onSubmit={contactForm.handleSubmit(sendEmail)}
                className="space-y-4 "
              >
                <FormField
                  control={contactForm.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel htmlFor="name">Name</FormLabel>
                      <FormControl>
                        <Input id="name" placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={contactForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          id="email"
                          placeholder="Your name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={contactForm.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel htmlFor="message">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          className="min-h-[100px] resize-none"
                          id="message"
                          {...field}
                          placeholder="Your message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className=" w-fit">
                  <Button type="submit">Submit</Button>
                </div>
              </form>
            </Form>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <a href="mailto:wazarkarseema@gmail.com">
                  wazarkarseema@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>+91 9922050631</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>
                  Thapar Institute of Engineering and Technology, Patiala,
                  Punjab, ZIP
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
