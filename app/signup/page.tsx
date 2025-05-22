"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { ThemeToggle } from "@/components/theme-toggle";
import { ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";
import { signup } from "../actions/signup";

const formSchema = z.object({
  businessName: z.string().min(2, {
    message: "Business name must be at least 2 characters.",
  }),
  botname: z.string().min(2, {
    message: "Botname can not be empty.",
  }),
  whatsappNumber: z.string().min(10, {
    message: "Please enter a valid WhatsApp number.",
  }),
  language: z.enum(["english", "twi", "pidgin", "formal"]),
});

export default function SignupPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "",
      whatsappNumber: "",
      language: "english",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      const formData = new FormData();

      for (const key in values) {
        formData.append(key, values[key as keyof typeof values]);
      }

      await signup(formData);

      setIsSuccess(true);
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent">
            VendorBot
          </span>
          <span className="text-2xl">🤖</span>
        </Link>
        <ThemeToggle />
      </header>

      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-6 hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        {isSuccess ? (
          <Card className="w-full">
            <CardContent className="pt-10 pb-8 px-8 text-center">
              <div className="mb-6 flex justify-center">
                <CheckCircle2 className="h-16 w-16 text-green-600" />
              </div>
              <CardTitle className="text-2xl mb-4">Setup Complete!</CardTitle>
              <CardDescription className="text-lg mb-8">
                Your VendorBot is being configured. We'll send you an activation
                link to your WhatsApp number shortly.
              </CardDescription>
              <Button
                onClick={() => router.push("/")}
                className="rounded-full bg-green-600 hover:bg-green-700 text-white px-8"
              >
                Return to Home
              </Button>
            </CardContent>
          </Card>
        ) : (
          <>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Set up your own WhatsApp assistant
            </h1>
            <p className="text-muted-foreground text-center mb-10">
              Fill in the details below to configure your VendorBot
            </p>

            <Card>
              <CardHeader>
                <CardTitle>Business Information</CardTitle>
                <CardDescription>
                  Enter your business details to customize your WhatsApp
                  assistant
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="businessName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Business Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your Business Name"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            This is how your business will appear to customers.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="botname"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Botname</FormLabel>
                          <FormControl>
                            <Input placeholder="Name of the bot" {...field} />
                          </FormControl>
                          <FormDescription>
                              This will be the name of the bot
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="whatsappNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your WhatsApp Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+233 XX XXX XXXX" {...field} />
                          </FormControl>
                          <FormDescription>
                            We'll send you notifications when human assistance
                            is needed.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="language"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Language or Tone</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                            >
                              {[
                                { value: "english", label: "English (Casual)" },
                                { value: "twi", label: "Twi" },
                                { value: "pidgin", label: "Ghanaian Pidgin" },
                                { value: "formal", label: "Formal Business" },
                              ].map((option) => (
                                <FormItem
                                  key={option.value}
                                  className="flex items-center space-x-3 space-y-0"
                                >
                                  <FormControl>
                                    <RadioGroupItem
                                      disabled
                                      value={option.value}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    {option.label}
                                  </FormLabel>
                                </FormItem>
                              ))}
                            </RadioGroup>
                          </FormControl>
                          <FormDescription>
                            How would you like your assistant to communicate
                            with customers?
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full rounded-full bg-green-600 hover:bg-green-700 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Setting up your assistant...
                        </>
                      ) : (
                        "Create My WhatsApp Assistant"
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </>
        )}
      </main>
    </div>
  );
}
