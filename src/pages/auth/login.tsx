/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { login } from "@/services/auth-service";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/components/auth/AuthProvider";

const CredentialSchema = z.object({
  email: z.string().email(),
  password: z.string()
})

export default function LoginPage() {
  const {signIn, currentUser} = useAuth();
  const navigate = useNavigate()
  const form = useForm({
    defaultValues: { email: '', password: '' },
    resolver: zodResolver(CredentialSchema)
  })

  const handleLogin = async (value: z.infer<typeof CredentialSchema>) => {
    try {
      await signIn(value)
      return navigate('/admin')
    } catch (error: any) {
      console.error('Login failed:', error.message);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="mx-auto max-w-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>Enter your email and password to login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleLogin)}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => {
                      return <FormItem>
                        <Label htmlFor="email">Email</Label>
                        <FormControl>
                        <Input placeholder="Email" {...field} />
                      </FormControl>
                        <FormMessage />
                      </FormItem>
                    }}
                  />

                </div>
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => {
                      return <FormItem>
                        <Label>Password</Label>
                        <FormControl>
                        <Input placeholder="password" {...field} />
                      </FormControl>
                        <FormMessage />
                      </FormItem>
                    }}
                  />
                </div>
                <Button className="w-full" type="submit">
                  Login
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}