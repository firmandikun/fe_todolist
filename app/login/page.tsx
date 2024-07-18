import LoginForm from "@/components/auth/LoginForm";
import AuthLayout from "@/layout/AuthLayout";

export default function Login({ Component, pageProps }: any) {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  )
}